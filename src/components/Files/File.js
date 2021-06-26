// React
import React, { useState} from 'react'

// Ionic 
import { IonButton } from '@ionic/react';

// Component
import LongPress from '../../modules/longPress';
import ActionFile from './ActionFile';

// Style
import './file.css'

// Redux
import { useDispatch } from 'react-redux';
import { deleteFile } from '../../redux/actions/fileAction'

const File = ({ file, color = "dark" }) => {
    const { title, id } = file
    const dispatch = useDispatch();
    const [showActionSheet, setShowActionSheet] = useState(false)

    const handleDelete = () => {
        dispatch(deleteFile(id));
    }

    return (
        <React.Fragment>
            <ActionFile deleteFile={handleDelete} showActionSheet={showActionSheet} setShowActionSheet={ (bool)=> setShowActionSheet(bool)} />
            <LongPress time={200} onLongPress={() => setShowActionSheet(true)} >
                <IonButton className="file" color={color}
                routerLink={{
                    pathname: '/videos',
                    id,
                    title
                }}>
                    {title}
                </IonButton>  
            </LongPress>
        </React.Fragment>
    )
}
export default File;    