// React
import React from 'react'

//Ionic
import { IonIcon } from '@ionic/react'
import { addOutline } from 'ionicons/icons'

// Style
import './addFileButton.css'

const AddFileButton: React.FC <{toggleActivateAlert: () => void }> = ({toggleActivateAlert}) => {
    return (
        <button className="addFileButton" type="button" onClick={toggleActivateAlert}>
            <IonIcon className="icon" icon={addOutline} />
        </button>
    )
}

export default AddFileButton;

