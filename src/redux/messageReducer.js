import initialState from './initialState';

const getHour = () => {
  const actualDate = new Date();
  return actualDate.toLocaleTimeString().slice(0, -3);
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      const fil = state[action.payload.botName] ? state[action.payload.botName].conversation : null;
      fil.push({
        sender: action.payload.from,
        content: action.payload.content,
        date: getHour()
      });
      return {
        ...state
      };
    }
    case 'SEND_MESSAGE_WITH_IMAGE': {
      const fil = state[action.payload.botName] ? state[action.payload.botName].conversation : null;
      fil.push({
        sender: action.payload.from,
        content: action.payload.content,
        date: getHour(),
        img: action.payload.img
      });
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
