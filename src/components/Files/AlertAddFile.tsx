// React
import React from 'react'

// Redux
import { useDispatch } from 'react-redux';
import { addFile } from '../../redux/actions/fileAction'

// Ionic
import { IonAlert } from '@ionic/react';

const AlertAddFile:React.FC<{ activate: boolean, toggleActivateAlert: () => void }> = ({ activate, toggleActivateAlert}) => {
    const dispatch = useDispatch();
    return (
        <IonAlert
            isOpen={activate}
            onDidDismiss={toggleActivateAlert}
            header={'Ajouter un dossier'}
            inputs={[{
                name: "fileName",
                type: 'text',
                placeholder: 'Nom du dossier'
            }]}
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
                  dispatch(addFile(input['fileName']));
                }
              }
            ]}
        />
    )
}

export default AlertAddFile;