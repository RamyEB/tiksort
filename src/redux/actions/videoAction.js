export const actionsType = {
    ADD_VIDEO: 'ADD_VIDEO',
    DELETE_VIDEO: 'DELETE_VIDEO'
};

export const addVideo = (fileId, link) => ({
    type: actionsType.ADD_VIDEO,
    payload: {
        fileId,
        link
    }
});
  
export const deleteVideo = (fileId, videoId) => ({
    type: actionsType.DELETE_VIDEO,
    payload: {
        fileId,
        videoId
    }
});