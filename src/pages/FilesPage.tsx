// React
import React, { useState } from 'react'

// Ionic
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'

// Redux
import { RootStateOrAny, useSelector } from 'react-redux';

// Component
import AddFileButton from '../components/Files/AddFileButton'
import AlertAddFile from '../components/Files/AlertAddFile'
import File from '../components/Files/File'

// Style
import './filesPage.css'

export default function FilesPages() {
    let data = useSelector((state: RootStateOrAny) => state);
    console.log(data);
    const [activateAlert, setActivateAlert] = useState(false)
    
    return (
        <React.Fragment>
            <IonPage>
                <AlertAddFile activate={activateAlert} toggleActivateAlert={() => setActivateAlert(false)} />
                <IonHeader>
                    <IonToolbar color="dark">
                        <IonTitle slot="start" >tiksort.</IonTitle>
                        <IonButtons slot="end"> 
                            <IonMenuButton type="button" autoHide={false} menu="0" color="light"/>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonText>
                        <p>Mes dossiers</p>
                    </IonText>
                    <div id="filesContainer">
                        <div id="addButtonContainer">
                            <AddFileButton toggleActivateAlert={() => setActivateAlert(true)} />
                        </div>
                        { 
                            data.reducer.files.map(
                            (file: any)=>  <File key={file.id} file={file} />)
                        }
                        {
                        /*
                        <File color="danger" title="Restos Asiats" />
                        <File color="warning" title="DIY jardin" />
                        <File color="primary" title="Recettes" />
                        <ion-button color="success">Success</ion-button>

                        <File title="Abonnez vous" />

                        */
                        } 
                    </div>
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}
