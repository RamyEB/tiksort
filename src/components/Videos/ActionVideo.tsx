// React
import React from 'react';

// Ionic
import { IonActionSheet } from '@ionic/react';

export const ActionVideo: React.FC<{
    showActionSheet: boolean, 
    setShowActionSheet: (bool: boolean) => void,
    deleteVideo: () => void
}> = ({ showActionSheet, setShowActionSheet, deleteVideo}) => {
    return (
        <IonActionSheet
            isOpen={showActionSheet}
            onDidDismiss={() => setShowActionSheet(false)}
            buttons={[{
            text: 'Supprimer',
            role: 'destructive',
            handler: () => {
                deleteVideo();
            }
            }, 
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]} 
        />
    );
}
export default ActionVideo;