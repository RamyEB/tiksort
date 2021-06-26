// React
import React from 'react'

// Ionic
import { IonIcon } from '@ionic/react'
import { addOutline } from 'ionicons/icons';

// Style
import './addVideoButton.css'

const AddVideoButton: React.FC<{toggleActivateAlert: () => void }> = ({ toggleActivateAlert }) => {
    return (
        <button type="button" className="addVideoButton" onClick={toggleActivateAlert}>
            <IonIcon className="icon" icon={addOutline} ></IonIcon>
        </button>
    )
}
export default AddVideoButton;