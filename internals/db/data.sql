insert into user_account (email, password_hash) values
  ('spowell0@noaa.gov', '$2a$06$.Ryt.S6xCN./QmTx3r9Meu/nsk.4Ypfuj.o9qIqv4p3iipCWY45Bi'), -- Password: 'iFbWWlc'
  ('afox1@npr.org', '$2a$06$FS4C7kwDs6tSrrjh0TITLuQ/pAjUHuCH0TBukHC.2m5n.Z1HxApRO'), -- Password: 'fjHtKk2FxCh0'
  ('sbanks2@blog.com', '$2a$06$i7AoCg3pbAOmf8J2w/lGpukUfDuRdfyUrR/mN7I0x.AYZb3Ak6DYS'), -- Password: '3RLdPN9'
  ('kaustin3@nyu.edu', '$2a$06$YJJ.vNqGcrKcX4ZtPl1nG.crDhCCoA6t5tWXkAokvprG4nytdWNli'), -- Password: 'jQZ8mYjUNH'
  ('kwilliams4@paypal.com', '$2a$06$Mx2dB7Y1yfL7WhCg0JHNLetBeIgsOqxRbKBOPc1Kv66lYEfbPghzi'), -- Password: '3Uostu'
  ('apeterson5@webnode.com', '$2a$06$wCdceaTUqf9fxp/j6hswk.pWp9aY7N2HMQeNKb2TJZMUm.i8IZ.3G'), -- Password: 'u2TZDkfHSm'
  ('glee6@arizona.edu', '$2a$06$WQiZeChX8yUR14DAshXKd.W6cwz0tsvf49IaNhmM65FkFJVr8GEgW'), -- Password: 'VEHWMCcfuMJ'
  ('drodriguez7@mashable.com', '$2a$06$8Wa.RA33V4MrCIKQ1rAJIu7HMJSLjTZLcZY1zrlU4fZrJOIVFtvQS'), -- Password: 'TEYkGd'
  ('jpalmer8@washingtonpost.com', '$2a$06$q3H4ngUMZ9ADz3utyzGRX.6pWrzmPurqEjKtm7qzbYJrmSEYrsYvu'), -- Password: 'yYh7KDQ2'
  ('rfisher9@nytimes.com', '$2a$06$lvLbqB8u.BVnqa8Zmy5E0.1LgSyKJkBnRYztVu3gO.hE6kCIsx2YK'); -- Password: 'tAVD3Yvi2'

insert into gourmet (gourmet_id, first_name, last_name, city, location) values
  ((SELECT user_id FROM user_account WHERE user_account.email = 'spowell0@noaa.gov'), 'Sara', 'Powell', 'Brest', point( 48.4, -4.4833)),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'afox1@npr.org'), 'Andrea', 'Fox', 'Quimper', point( 48, -4.1)),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'sbanks2@blog.com'), 'Stephen', 'Banks', 'Rennes', point( 48.0833, -1.6833)),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'kaustin3@nyu.edu'), 'Kathy', null, null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'kwilliams4@paypal.com'), 'Kenneth', 'Williams', null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'apeterson5@webnode.com'), 'Ann', 'Peterson', null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'glee6@arizona.edu'), 'Gloria', 'Lee', null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'drodriguez7@mashable.com'), 'Douglas', null, null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'jpalmer8@washingtonpost.com'), 'Jeffrey', 'Palmer', null, null),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'rfisher9@nytimes.com'), 'Robert', 'Fisher', null, null);

insert into cook (cook_id, description) values
  ((SELECT user_id FROM user_account WHERE user_account.email = 'spowell0@noaa.gov'), 'Le cook le plus sympa de Brest !'),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'afox1@npr.org'), 'Ca groove ?!'),
  ((SELECT user_id FROM user_account WHERE user_account.email = 'sbanks2@blog.com'), 'Hey man');

insert into kitchen (name, location, city) values
  ('Arthur Bonnet', point(48.4, -4.4833), 'Brest');

insert into workshop (name, price, duration, min_gourmet, max_gourmet, description, kitchen_id, cook_id, workshop_date) values
  ('Atelier sushi', 35, 90, 3, 5, 'Atelier sushi description', (SELECT kitchen_id FROM kitchen WHERE name = 'Arthur Bonnet'), (SELECT user_id FROM user_account WHERE user_account.email = 'spowell0@noaa.gov'), '2016-07-01 15:00:00'),
  ('Atelier fraisier', 40, 90, 3, 5, 'Atelier fraisier description', null, (SELECT user_id FROM user_account WHERE user_account.email = 'afox1@npr.org'), '2016-07-01 15:00:00'),
  ('Atelier sushi', 35, 90, 3, 5, 'Atelier sushi description', null, (SELECT user_id FROM user_account WHERE user_account.email = 'sbanks2@blog.com'), '2016-07-01 15:00:00');
