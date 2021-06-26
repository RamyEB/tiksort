import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GoogleLogin from '../components/Login';
import './Home.css';
import app from '../services/base'

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Connected</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <button type="button" onClick={() => { app.auth().signOut() }}>Se deconnecter</button>
      </IonContent>
    </IonPage>
  );
};

export default Home;
