/*
 * \file schema.js
 * \brief  { Tables statement with Apollo Server
 *           Queries, mutations and subscriptions statement as well as
 *           schema definition }
 * \date 16 juin 2017
 * \author Cuistot du coin
 */

// Import of dependency
const GraphQLToolsTypes = require('graphql-tools-types');
const { makeExecutableSchema } = require('graphql-tools');
const { PubSub } = require('graphql-subscriptions');
const { withFilter } = require('graphql-subscriptions');
// Use only for debugging
// const stringify = require('json-stringify-safe');
const {
  Kitchen,
  UserAccount,
  Gourmet,
  Cook,
  Reservation,
  UserLogin,
  Workshop,
  Commentary
} = require('./models');
// --------------------- //

// Used for subscription
const pubsub = new PubSub();

const typeDefs = [
  `
scalar Date
scalar JSON
scalar Point
type UserAccount {
  user_id: ID
  email: String
  email_confirmed: Boolean
  password_hash: String
  security_stamp: String
  concurrency_stamp: ID
  phone_number: String
  phone_number_confirmed: Boolean
  two_factor_enabled: Boolean
  lockout_end: Date
  lockout_enabled: Boolean
  access_failed_count: Int
  gourmet: Gourmet
  login: UserLogin
}
type Kitchen {
  kitchen_id: ID
  name: String
  city: String
  cp: String
  location: Point
  workshop: [Workshop]
}
type Gourmet {
  gourmet_id: ID
  first_name: String
  last_name: String
  picture: JSON
  gender: String
  city: String
  cp: String
  location: Point
  description: String
  useraccount: UserAccount
  cook: Cook
  reservation: [Reservation]
}
type Cook {
  cook_id: ID
  is_pro: Boolean
  description: String
  business_name: String
  siren: String
  email_pro: String
  first_name_legal: String
  last_name_legal: String
  birthday_legal: Date
  gourmet: Gourmet
  workshop: [Workshop]
}
type Reservation {
  gourmet_id: ID
  workshop_id: ID
  amount: Int
  gourmet: [Gourmet]
  workshop: [Workshop]
}
type UserLogin {
  name: String!
  key: String!
  user_id: ID
  account: UserAccount
}
type Workshop {
  workshop_id: ID
  name: String
  price: Int
  duration: Int
  min_gourmet: Int
  max_gourmet: Int
  description: String
  pictures: JSON
  kitchen_id: ID
  cook_id: ID
  workshop_date: Date
  cook: Cook
  kitchen: Kitchen
  reservation: [Reservation]
}
type Commentary {
  comment_id: ID
  rating: Float
  commentary: String
  cook_id: ID
  workshop_id: ID
}
type Query {
  userAccount(user_id: ID, email: String, email_confirmed: Boolean, password_hash: String, security_stamp: String, concurrency_stamp: ID, phone_number: String, phone_number_confirmed: Boolean, two_factor_enabled: Boolean, lockout_end: Date, lockout_enabled: Boolean, access_failed_count: Int): [UserAccount]
  kitchen(kitchen_id: ID, name: String, city: String, cp: String, location: Point): [Kitchen]
  gourmet(gourmet_id: ID, first_name: String, last_name: String, picture: JSON, gender: String, city: String, cp: String, location: Point, description: String): [Gourmet]
  cooks(cook_id: ID, is_pro: Boolean, description: String, business_name: String, siren: String, email_pro: String, first_name_legal: String, last_name_legal: String, birthday_legal: Date): [Cook]
  cook(cook_id: ID!, is_pro: Boolean, description: String, business_name: String, siren: String, email_pro: String, first_name_legal: String, last_name_legal: String, birthday_legal: Date): Cook
  reservation(gourmet_id: ID, workshop_id: ID, amount: Int): [Reservation]
  userLogin(name: String, key: String, user_id: ID): [UserLogin]
  workshop(workshop_id: ID, name: String, price: Int, duration: Int, min_gourmet: Int, max_gourmet: Int, description: String, pictures: JSON, kitchen_id: ID, cook_id: ID, workshop_date: Date): [Workshop]
  commentary(comment_id: ID, rating: Float, commentary: String, cook_id: ID, workshop_id: ID): [Commentary]
}
type Mutation {
  addUserAccount(
    email: String!, email_confirmed: Boolean, password_hash: String, security_stamp: String,
    concurrency_stamp: ID, phone_number: String, phone_number_confirmed: Boolean,
    two_factor_enabled: Boolean, lockout_end: Date, lockout_enabled: Boolean,
    access_failed_count: Int,
  ): UserAccount
  addUserLogin( name: String!, key: String, user_id: ID! ): UserLogin
  addGourmet(
    gourmet_id: ID!, first_name: String, last_name: String, picture: JSON, gender: String,
    city: String, cp: String, location: Point, description: String
  ): Gourmet
  addCook(cook_id: ID!, is_pro: Boolean, description: String, business_name: String, siren: String, email_pro: String, first_name_legal: String, last_name_legal: String, birthday_legal: Date): Cook
  addKitchen(
    name: String!, city: String!, cp: String, location: Point
  ): Kitchen
  addWorkshop(
    workshop_id: ID, name: String!, price: Int!, duration: Int!, min_gourmet: Int!,
    max_gourmet: Int!, description: String!, pictures: JSON, kitchen_id: ID,
    cook_id: ID!, workshop_date: Date!
  ): Workshop
  addCommentary(
    comment_id: ID, rating: Float!, commentary: String!, cook_id: ID, workshop_id: ID
  ): Commentary
  addReservation( gourmet_id: ID!, workshop_id: ID!, amount: Int! ): Reservation
  updateUserAccount(
    user_id: ID!, email: String, email_confirmed: Boolean, password_hash: String,
    security_stamp: String, concurrency_stamp: ID, phone_number: String,
    phone_number_confirmed: Boolean, two_factor_enabled: Boolean, lockout_end: Date,
    lockout_enabled: Boolean, access_failed_count: Int,
  ): UserAccount
  updateUserLogin( name: String, key: String, user_id: ID! ): UserLogin
  updateGourmet(
    gourmet_id: ID!, first_name: String, last_name: String, picture: JSON, gender: String,
    city: String, cp: String, location: Point, description: String
  ): Gourmet
  updateCook(cook_id: ID!, is_pro: Boolean, description: String, business_name: String
    siren: String, email_pro: String, first_name_legal: String, last_name_legal: String, birthday_legal: Date): Cook
  updateKitchen(
    kitchen_id: ID!, name: String, city: String, cp: String, location: Point): Kitchen
  updateWorkshop(
    workshop_id: ID!, name: String, price: Int, duration: Int, min_gourmet: Int,
    max_gourmet: Int, description: String, pictures: JSON, kitchen_id: ID,
    cook_id: ID!, workshop_date: Date
  ): Workshop
  updateReservation( gourmet_id: ID!, workshop_id: ID!, amount: Int ): Reservation
  deleteCook( cook_id: ID! ): Cook
  deleteWorkshop( workshop_id: ID! , cook_id: ID! ): Workshop
  deleteReservation( gourmet_id: ID!, workshop_id: ID! ): Reservation
  deleteUser( user_id: ID! ): UserAccount
  deleteKitchenAndWorkshopAssociated( kitchen_id: ID!, cook_id: ID! name: String ): Kitchen
}
type Subscription {
  workshopAdded(kitchen_id: ID): Workshop
  workshopsAdded: Workshop
}
schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`
];

const resolvers = {
  // Resolvers function for custom types
  Date: GraphQLToolsTypes.Date({ name: 'MyDate' }),
  JSON: GraphQLToolsTypes.JSON({ name: 'MyJSON' }),
  Point: GraphQLToolsTypes.JSON({
    name: 'Point',
    struct: '{ x: number, y: number }'
  }),
  // --------------------------------------------------------------------------------- //

  // ---------------------------------------------------------- //
  // Query resolvers function definition
  // ---------------------------------------------------------- //
  Query: {
    userAccount(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;
      // console.log(`CONTEXT AUTH + ${stringify(ctx.auth, null, 2)}`);
      // console.log(`CONTEXT USER + ${stringify(ctx.user, null, 2)}`);
      // console.log(`ARGS USER + ${stringify(args.user_id, null, 2)}`);
      // console.log(`ADMIN + ${stringify(admin, null, 2)}`);
      // console.log(`ID + ${stringify(id, null, 2)}`);

      if (id || admin) {
        return UserAccount.findAndCountAll({ where: args }).then(result => {
          if (!result) {
            return 'Users not find !';
          }
          // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
          return result.rows;
        });
        // eslint-disable-next-line
      } else return null;
    },
    kitchen(_, args) {
      return Kitchen.findAndCountAll({ where: args }).then(result => {
        if (!result) {
          return 'Kitchen not find !';
        }
        // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
        return result.rows;
      });
    },
    gourmet(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        return Gourmet.findAndCountAll({ where: args }).then(result => {
          if (!result) {
            return 'Gourmet not find !';
          }
          // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
          // console.log("Coordonnée en x : " + JSON.stringify(result.rows[0].location.coordinates[0]));
          return result.rows;
        });
        // eslint-disable-next-line
      } else return null;
    },
    cooks(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        return Cook.findAndCountAll({ where: args }).then(result => {
          if (!result) {
            return 'Cook not find !';
          }
          // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
          return result.rows;
        });
        // eslint-disable-next-line
      } else return null;
    },
    cook(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        return Cook.findOne({ where: args });
      }
    },
    reservation(_, args) {
      return Reservation.findAndCountAll({ where: args }).then(result => {
        if (!result) {
          return 'Reservation not find !';
        }
        // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
        return result.rows;
      });
    },
    userLogin(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;

      if (id || admin) {
        return UserLogin.findAndCountAll({ where: args }).then(result => {
          if (!result) {
            return 'UserLogin not find !';
          }
          // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
          return result.rows;
        });
        // eslint-disable-next-line
      } else return null;
    },
    workshop(_, args) {
      return Workshop.findAndCountAll({ where: args }).then(result => {
        if (!result) {
          return 'Workshop not find !';
        }
        // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
        return result.rows;
      });
    },
    commentary(_, args) {
      return Commentary.findAndCountAll({ where: args }).then(result => {
        if (!result) {
          return 'Comments not find !';
        }
        // console.log(`DataValues of result : ${JSON.stringify(result.rows)}`);
        return result.rows;
      });
    }
  },
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //

  // ---------------------------------------------------------- //
  // For Imbricated queries
  // ---------------------------------------------------------- //
  UserAccount: {
    gourmet(useraccount) {
      return useraccount.getGourmet();
    },
    login(account) {
      return account.getUserLogin();
    }
  },
  UserLogin: {
    account(login) {
      return login.getUserAccount();
    }
  },
  Gourmet: {
    useraccount(gourmet) {
      return gourmet.getUserAccount();
    },
    cook(gourmet) {
      return gourmet.getCook();
    },
    reservation(gourmet) {
      return gourmet.getReservation();
    }
  },
  Cook: {
    gourmet(cook) {
      return cook.getGourmet();
    },
    workshop(cook) {
      return cook.getWorkshop();
    }
  },
  Kitchen: {
    workshop(kitchen) {
      return kitchen.getWorkshop();
    }
  },
  Workshop: {
    kitchen(workshop) {
      return workshop.getKitchen();
    },
    cook(workshop) {
      return workshop.getCook();
    },
    reservation(workshop) {
      return workshop.getReservation();
    }
  },
  Reservation: {
    gourmet(reservation) {
      return reservation.getGourmet();
    },
    workshop(reservation) {
      return reservation.getWorkshop();
    }
  },
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //

  // ---------------------------------------------------------- //
  // Mutation resolvers function definition
  // ---------------------------------------------------------- //
  Mutation: {
    addGourmet(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        // eslint-disable-next-line
        args.location = {
          type: 'Point',
          coordinates: [args.location.x, args.location.y]
        };
        return Gourmet.create(args);
        // eslint-disable-next-line
      } else return null;
    },
    addUserAccount(_, args) {
      return UserAccount.create(args);
    },
    addUserLogin(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;

      if (id || admin) {
        return UserLogin.create(args);
        // eslint-disable-next-line
      } else return null;
    },
    addCook(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        return Cook.create(args);
        // eslint-disable-next-line
      } else return null;
    },
    addKitchen(_, args) {
      // eslint-disable-next-line
      args.location = {
        type: 'Point',
        coordinates: [args.location.x, args.location.y]
      };
      return Kitchen.create(args);
    },
    addWorkshop(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        const newWorkshop = Workshop.create(args);
        // After creating the new workshop we push it in subscription
        newWorkshop.then(valeur => {
          pubsub.publish('workshopAdded', {
            workshopAdded: valeur,
            kitchen_id: valeur.kitchen_id
          });
          pubsub.publish('workshopsAdded', {
            workshopsAdded: valeur
          });
        });
        return newWorkshop;
        // eslint-disable-next-line
      } else return null;
    },
    addCommentary(_, args, ctx) {
      return Commentary.create(args);
    },
    addReservation(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        return Reservation.create(args);
        // eslint-disable-next-line
      } else return null;
    },

    updateUserAccount(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;

      if (id || admin) {
        UserAccount.update(args, {
          where: { user_id: args.user_id }
        });
        return UserAccount.findById(args.user_id);
        // eslint-disable-next-line
      } else return null;
    },
    updateUserLogin(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;

      if (id || admin) {
        UserLogin.update(args, {
          where: { user_id: args.user_id }
        });
        return UserLogin.findById(args.user_id);
        // eslint-disable-next-line
      } else return null;
    },
    updateGourmet(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        Gourmet.update(args, {
          where: { gourmet_id: args.gourmet_id }
        });
        return Gourmet.findById(args.gourmet_id);
        // eslint-disable-next-line
      } else return null;
    },
    updateCook(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        Cook.update(args, {
          where: { cook_id: args.cook_id }
        });
        return Cook.findById(args.cook_id);
        // eslint-disable-next-line
      } else return null;
    },
    updateKitchen(_, args) {
      Kitchen.update(args, {
        where: { kitchen_id: args.kitchen_id }
      });
      return Kitchen.findById(args.kitchen_id);
    },
    updateWorkshop(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        Workshop.update(args, {
          where: { workshop_id: args.workshop_id }
        });
        return Workshop.findById(args.workshop_id);
        // eslint-disable-next-line
      } else return null;
    },
    updateReservation(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        Reservation.update(args, {
          where: {
            gourmet_id: args.gourmet_id,
            workshop_id: args.workshop_id
          }
        });
        return Reservation.findById(args.gourmet_id);
        // eslint-disable-next-line
      } else return null;
    },

    deleteWorkshop(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        Reservation.destroy({ where: args });
        return Workshop.destroy({ where: args });
        // eslint-disable-next-line
      } else return null;
    },
    deleteReservation(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.gourmet_id === ctx.user;

      if (id || admin) {
        return Reservation.destroy({ where: args });
        // eslint-disable-next-line
      } else return null;
    },
    deleteCook(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        return Cook.destroy({ where: args });
        // eslint-disable-next-line
      } else return null;
    },

    // This function will erase totaly a user
    // (deletion in : UserAccount, UserLogin, Gourmet, Cook, Reservation)
    // If the account is a cook associated to a workshop, The user will NOT be deleted
    deleteUser(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.user_id === ctx.user;

      if (id || admin) {
        return Cook.destroy({ where: { cook_id: args.user_id } })
          .then(() => {
            Gourmet.destroy({ where: { gourmet_id: args.user_id } });
            Reservation.destroy({ where: { gourmet_id: args.user_id } });
            UserLogin.destroy({ where: args });
            return UserAccount.destroy({ where: args });
          })
          .catch(error => {
            // eslint-disable-next-line
            console.log(`The user is associate to a workshop : ${error}`);
            return error;
          });
        // eslint-disable-next-line
      } else return null;
    },
    deleteKitchenAndWorkshopAssociated(_, args, ctx) {
      const admin = ctx.auth === 'admin';
      const id = args.cook_id === ctx.user;

      if (id || admin) {
        Workshop.destroy({ where: { kitchen_id: args.kitchen_id } });
        return Kitchen.destroy({ where: args });
        // eslint-disable-next-line
      } else return null;
    }
  },
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //

  // ---------------------------------------------------------- //
  // Subscription resolvers function definition
  // ---------------------------------------------------------- //
  Subscription: {
    workshopAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('workshopAdded'),
        (payload, variables) => payload.kitchen_id === variables.kitchen_id
      )
    },
    workshopsAdded: {
      subscribe: () => pubsub.asyncIterator('workshopsAdded')
    }
  }
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //
  //! --------------------------------------------------------- //
};

// Make executable schema with typeDefs and resolvers
const jsSchema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Schema executable export
module.exports = jsSchema;
