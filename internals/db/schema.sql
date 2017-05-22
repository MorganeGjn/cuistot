-- CREATE EXTENSION "uuid-ossp";

-- base on membership.db
CREATE TABLE user_account (
  user_id                uuid NOT NULL DEFAULT uuid_generate_v1mc(),
  email                  character varying(256),
  email_confirmed        boolean NOT NULL DEFAULT false,
  password_hash          character varying(100),
  security_stamp         character varying(100),
  concurrency_stamp      uuid NOT NULL DEFAULT uuid_generate_v1mc(),
  phone_number           character varying(50),
  phone_number_confirmed boolean NOT NULL DEFAULT false,
  two_factor_enabled     boolean NOT NULL DEFAULT false,
  lockout_end            timestamp without time zone,
  lockout_enabled        boolean NOT NULL DEFAULT false,
  access_failed_count    smallint NOT NULL DEFAULT 0,
  -- Keys
  CONSTRAINT user_account_pkey PRIMARY KEY (user_id),
  CONSTRAINT user_account_email_key UNIQUE (email)
);

CREATE TABLE user_login (
  name      character varying(50),
  key       character varying(100),
  user_id   uuid NOT NULL,
  -- Keys
  CONSTRAINT user_login_pkey PRIMARY KEY (name, key),
  CONSTRAINT user_login_user_account_fkey FOREIGN KEY (user_id)
      REFERENCES user_account (user_id)
      ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE gourmet (
  gourmet_id   uuid NOT NULL,
  first_name   character varying(100),
  last_name    character varying(100),
  picture      json,
  gender       character varying(50),
  city         character varying(100),
  cp           character varying(10),
  location     point,
  description  text,
  created_at   timestamp without time zone DEFAULT timezone('utc'::text, now()),
  updated_at   timestamp without time zone DEFAULT timezone('utc'::text, now()),
  -- Keys
  CONSTRAINT gourmet_pkey PRIMARY KEY (gourmet_id),
  CONSTRAINT gourmet_user_account_fkey FOREIGN KEY (gourmet_id)
      REFERENCES user_account (user_id)
      ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE cook (
  cook_id   uuid NOT NULL,
  is_pro       boolean NOT NULL DEFAULT false,
  description  text,
  -- Keys
  CONSTRAINT cook_pkey PRIMARY KEY (cook_id),
  CONSTRAINT cook_gourmet_fkey FOREIGN KEY (cook_id)
      REFERENCES gourmet (gourmet_id)
      ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kitchen (
  kitchen_id  uuid NOT NULL DEFAULT uuid_generate_v1mc(),
  name        character varying(100),
  city         character varying(100),
  cp           character varying(10),
  location    point NOT NULL,
  CONSTRAINT kitchen_pkey PRIMARY KEY (kitchen_id)
);

CREATE TABLE workshop (
  workshop_id        uuid NOT NULL DEFAULT uuid_generate_v1mc(),
  name              character varying(100),
  price             smallint NOT NULL,
  duration          smallint NOT NULL, --minutes
  min_gourmet       smallint NOT NULL,
  max_gourmet       smallint NOT NULL,
  description       text,
  pictures          json,
  kitchen_id        uuid,
  cook_id           uuid NOT NULL,
  workshop_date     timestamp without time zone NOT NULL,
  CONSTRAINT workshop_pkey PRIMARY KEY (workshop_id),
  CONSTRAINT workshop_kitchen_fkey FOREIGN KEY (kitchen_id)
      REFERENCES kitchen (kitchen_id),
  CONSTRAINT workshop_cook_fkey FOREIGN KEY (cook_id)
      REFERENCES cook (cook_id)
);

CREATE TABLE reservation (
  gourmet_id    uuid NOT NULL,
  workshop_id   uuid NOT NULL,
  amount        smallint NOT NULL DEFAULT 1,
  CONSTRAINT reservation_pkey PRIMARY KEY (gourmet_id, workshop_id),
  CONSTRAINT reservation_gourmet_id_fkey FOREIGN KEY (gourmet_id)
      REFERENCES gourmet (gourmet_id),
  CONSTRAINT reservation_workshop_id_fkey FOREIGN KEY (workshop_id)
      REFERENCES workshop (workshop_id)
);
