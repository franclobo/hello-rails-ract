const url = 'http://localhost:3000/api/v1/greetings';
const GETMESSAGES = 'greetings/GETMESSAGES';

function greetingReducer(state = [], action) {
  switch (action.type) {
    case GETMESSAGES:
      return [...action.greetings];
    default:
      return state;
  }
}

const getMessages = (greetings) => ({
  type: GETMESSAGES,
  greetings,
});

export const fetchGreeting = () => (dispatch) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch(getMessages(data));
    });
};

export default greetingReducer;
