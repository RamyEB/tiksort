// React
import React, { useState } from 'react';

// Component
import LongPress from '../../modules/longPress';
import ActionVideo from './ActionVideo';

// Redux
import { useDispatch } from 'react-redux';
import { deleteVideo } from '../../redux/actions/videoAction'

// Img
import errorLoadingThumbnail from '../../assets/errorLoadingThumbnail.png'

// Style
import './video.css'

const Video: React.FC<{ post: any, fileId: string }> = ({ post, fileId }) => {
    const [urlImg, setUrlImg] = useState(post.thumbnail_url)
    const dispatch = useDispatch();

    const handleImgError = (e: any) => {
        setUrlImg(errorLoadingThumbnail);
    }

    const handleDelete = () => {
        dispatch(deleteVideo(fileId, post.id));
    }

    const [showActionSheet, setShowActionSheet] = useState(false)
    return (
        <React.Fragment>
            <ActionVideo deleteVideo={handleDelete} showActionSheet={showActionSheet} setShowActionSheet={ (bool:boolean)=> setShowActionSheet(bool)}/>
            <LongPress time={200} onLongPress={() => setShowActionSheet(true)} >
                <a className="linkVideo" href={post.url}>
                    <img className="video" src={urlImg} onDoubleClick={() => setShowActionSheet(true)} onError={handleImgError}/>
                </a>
            </LongPress>
        </React.Fragment>
    )
}
export default Video;
