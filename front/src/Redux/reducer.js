const initialState = { user: {}, diagrams: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case 'INIT_DIAGRAM':
      return {...state, diagrams:action.payload}
    default:
      return state;
  }
}
