import {initialStateDataBase} from '../initialState';
import { v4 as uuidv4 } from 'uuid';
  
export default function reducer(state = initialStateDataBase, action) {
  switch (action.type) {
    case 'ADD_VIDEO': {
        fetch(`https://www.tiktok.com/oembed?url=${action.payload.link}`)
        .then(response => response.json())
        .then((data)=>{
            const file = state.files.find((file)=> (file.id === action.payload.fileId))
            console.log(action.payload)
            file.videos.unshift({
                id: uuidv4(),
                url: action.payload.link,
                html: data.html,
                thumbnail_url: data.thumbnail_url
            });
        })
        .catch((error)=>{
            console.log(error);
        });
      return {
        ...state
      };
    }
    case 'DELETE_VIDEO': {
        const file = state.files.find((file)=> (file.id === action.payload.fileId))
        const index = file.videos.findIndex(x => x.id === action.payload.videoId);
        file.videos.splice(index, 1);
        return {
            ...state,
            file
        };
    }
    case 'ADD_FILE': {
      state.files.unshift({
          id: uuidv4(),
          title: action.payload.fileName,
          videos: []
      });
      return {
        ...state
      };
    }   
    case 'DELETE_FILE': {
      const index = state.files.findIndex(file => file.id === action.payload.id);
      state.files.splice(index, 1);
      return {
          ...state
      };
    }
    default:
      return state;
  }
}
