export const SET_USER = "user/SET_USER";

export const setUser = user => ({
  type: SET_USER,
  ...user
});

const initState = {
  name: "",
  email: ""
};

const books = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        name: action.name,
        email: action.email
      };
    default:
      return state;
  }
};

export default books;
