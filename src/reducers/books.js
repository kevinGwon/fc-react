export const SET_BOOKS = "books/SET_BOOKS";
export const LOADING_ON = "books/LOADING_ON";
export const LOADING_OUT = "books/LOADING_OUT";
export const ERROR = "books/ERROR";
export const CLEAR_ERROR = "books/CLEAR_ERROR";

export const setBooks = books => ({
  type: SET_BOOKS,
  ...books
});

export const errorBooks = error => ({
  type: ERROR,
  error
});
export const clearErrorBooks = () => ({
  type: CLEAR_ERROR
});

export const onLoading = () => ({
  type: LOADING_ON
});

export const outLoading = () => ({
  type: LOADING_OUT
});

const initState = {
  isLoading: false,
  list: [],
  error: null
};

const books = (state = initState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      console.log(action);
      return {
        ...state
        // list: [...action.list]
      };
    case LOADING_ON:
      return {
        ...state,
        isLoading: false
      };
    case LOADING_OUT:
      return {
        ...state,
        isLoading: true
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default books;
