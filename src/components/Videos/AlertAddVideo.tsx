// React
import React from 'react'

//Ionic
import { IonAlert } from '@ionic/react';

// Redux
import { useDispatch } from 'react-redux';
import { addVideo } from '../../redux/actions/videoAction'

const AlertAddVideo:React.FC<{ activate: boolean, toggleActivateAlert: () => void, fileId: string }> = ({ activate, toggleActivateAlert, fileId}) => {
    const dispatch = useDispatch();
    return (
        <IonAlert
          isOpen={activate}
          onDidDismiss={toggleActivateAlert}
          header={'Ajouter une vidéo !'}
          inputs={[
              {
                name: "link",
                type: 'text',
                placeholder: 'Colle le lien de ta vidéo'
              }
          ]}
          buttons={[
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              },
              {
                text: "Ajouter",
                handler: (input) => {
                    dispatch(addVideo(fileId, input['link']));
                }
              }
          ]}
        />
    )
}
export default AlertAddVideo;