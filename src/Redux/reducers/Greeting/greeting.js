// action type
const GET_GREETINGS = 'GET_GREETING';

const url = '/greeting';

export const fetchGreeting = () => async (dispatch) => {
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  }).then((response) => response.json());
  dispatch({
    type: GET_GREETINGS,
    payload: data.greeting,
  });
};

export default function greetingReducer(
  state = "You haven't made a greeting, yet :(",
  action,
) {
  switch (action.type) {
    case GET_GREETINGS:
      return action.payload;
    default:
      return state;
  }
}
