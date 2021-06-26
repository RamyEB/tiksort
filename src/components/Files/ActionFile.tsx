import React from 'react';
import { IonActionSheet } from '@ionic/react';

export const ActionFile: React.FC<{
    showActionSheet: boolean, 
    setShowActionSheet: (bool: boolean) => void,
    deleteFile: () => void
}> = ({ showActionSheet, setShowActionSheet, deleteFile}) => {

    return (
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
                deleteFile();
            }
        }, 
        {
            text: 'Renommer',
            role: 'modify',
            handler: () => {
                // TODO : Fonction renommer
                console.log("Renommer");
            }
        }, 
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}/>
    );
}
export default ActionFile;