// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = err => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = cb => componentModule => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('Authentification/reducer'),
          import('Authentification/sagas'),
          import('containers/pages/Home')
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/search',
      name: 'search',
      getComponent(nextState, cb) {
        const importModules = Promise.all([import('containers/pages/Search')]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/admin',
      name: 'admin',
      getComponent(location, cb) {
        import('containers/pages/Admin')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/workshop/*',
      name: 'workshop',
      getComponent(location, cb) {
        import('containers/pages/Workshop')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/organize',
      name: 'organize',
      getComponent(location, cb) {
        import('containers/pages/Organize')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/profil',
      name: 'profil',
      getComponent(location, cb) {
        import('containers/pages/Profil')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/cook/*',
      name: 'cook',
      getComponent(cook, cb) {
        import('containers/pages/Cook')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/pages/NotFound')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    }
  ];
}
