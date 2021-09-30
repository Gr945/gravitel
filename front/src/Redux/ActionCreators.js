

//login users

export const loginUserSagaAC = (payload) => {
  return {
    type: 'LOGIN_USER_SAGA',
    payload,
  };
};

export const loginUserAC = (payload) => {
  return {
    type: 'LOGIN_USER',
    payload,
  };
};

//init diagram
export const initDiagramSagaAC = () => {
  return {
    type: 'INIT_DIAGRAM_SAGA',
  };
};

export const initDiagramAC = (payload) => {
  return {
    type: 'INIT_DIAGRAM',
    payload,
  };
};
