export const actionsType = {
    ADD_FILE: 'ADD_FILE',
    DELETE_FILE: 'DELETE_FILE'
};

export const addFile = (fileName) => ({
    type: actionsType.ADD_FILE,
    payload: {
        fileName
    }
});

export const deleteFile = (id) => ({
    type: actionsType.DELETE_FILE,
    payload: {
        id
    }
});