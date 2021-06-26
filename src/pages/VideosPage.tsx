// React
import React, {useEffect, useState} from 'react';

//Redux
import { useSelector } from 'react-redux';

//Ionic
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, IonMenuButton, IonButtons, IonPage, IonBackButton, IonLoading } from '@ionic/react';

// Components 
import Video from '../components/Videos/Video';
import AddVideoButton from '../components/Videos/AddVideoButton'
import AlertAddVideo from '../components/Videos/AlertAddVideo';

// Style
import './videosPage.css';

const VideosPage:React.FC<{ location : any }> = ({location}) => {
    let data = useSelector((state: any) => state);
    const file = data.reducer.files.find((file: any)=> (file.id === location.id))
    const [activateAlert, setActivateAlert] = useState(false)
    const [reload, setReaload] = useState(true)

    const doRefresh = (e: any) => {
        setTimeout(() => {
            setReaload(!reload)
            e.detail.complete();
          }, 2000);
    };
/*
    useEffect(()=>{
        return () => {
            setReaload(!reload)
        }
    })
    */

    return (
        <React.Fragment>
            <IonPage>
                <AlertAddVideo fileId={location.id} activate={activateAlert} toggleActivateAlert={() => setActivateAlert(false)} />
                <IonLoading
                    isOpen={data.stateAppReducer.video.loading}
                    onDidDismiss={() => {console.log("je clic");}}
                    message={'Ajout de la vidéo...'}
                    spinner="crescent"
                    translucent={true}
                    duration={5000}
                />
                <IonHeader>
                    <IonToolbar color="dark">
                        <IonButtons slot="start">
                            <IonBackButton text="" color="light" defaultHref="/files"/>
                        </IonButtons>
                        <IonTitle color="light" slot="start">{location.title}</IonTitle>
                        <IonButtons slot="end"> 
                            <IonMenuButton type="button" autoHide={false} menu="0" color="light" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent id="first">
                    <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <div id="container">
                        <AddVideoButton toggleActivateAlert={() => setActivateAlert(true)}/>
                        { 
                            file?.videos.map((obj: any)=> <Video key={obj.id} fileId={location.id} post={obj}></Video>)
                        }
                    </div>
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
export default VideosPage;