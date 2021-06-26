import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//Redux
import { Provider } from 'react-redux';

//Auth
import { AuthProvider } from './services/Auth';

// Router Component
import PrivateRoute from './services/PrivateRoute';

// Pages
import VideosPage from './pages/VideosPage';
import store from './redux/store';
import FilesPage from './pages/FilesPage';

//Route
import Login from './components/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Global CSS */
import './global.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import history from './history';
import Menu from './components/Menu/Menu';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IonApp>
        <Menu></Menu>
      <IonReactRouter history={history}>
        <IonRouterOutlet id="main">

          <Route exact path="/files" component={FilesPage} />
          <Route path="/videos" component={VideosPage} />
          <Redirect exact from="/" to="/files" />

        </IonRouterOutlet>
      </IonReactRouter>
      </IonApp>
    </Provider>
  )
  
  /*(
  <AuthProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AuthProvider>
)*/
};

export default App;
