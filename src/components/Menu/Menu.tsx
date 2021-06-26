// Ionic
import { IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenu, IonText, IonTitle, IonToolbar } from '@ionic/react'

export default function Menu(){
    // TODO : Link
    return (
        <IonMenu swipeGesture={true} type="overlay" menuId="0" contentId="main" side="end" >
            <IonHeader>
                <IonToolbar color="dark">
                <IonTitle>Sheeeesh.</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonText slot="start">👨🏽‍💻</IonText>
                        <IonText>Qui suis-je</IonText>
                    </IonItem>
                    <IonItem>
                        <IonText slot="start">☕️</IonText>
                        <IonText>M'offrir un café</IonText>
                    </IonItem>
                    <IonItem>
                        <IonText slot="start">⌛️</IonText>
                        <IonText>Fonctionalités à venir</IonText>
                    </IonItem>
                    <IonItem>
                        <IonText slot="start">💡</IonText>
                        <IonText>Boite à idée</IonText>
                    </IonItem>
                    <IonItem>
                        <IonText slot="start">😞</IonText>
                        <IonText color="medium">Se déconnecter</IonText>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar className="ion-text-center">
                    <IonText >Made with 🖤</IonText>
                </IonToolbar>
            </IonFooter>
        </IonMenu>
    )
}
