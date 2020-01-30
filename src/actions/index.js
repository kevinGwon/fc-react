export const ADD_TODOS = 'ADD_TODOS';
export function addBooks(books) {
  return {
    type: ADD_TODOS,
    books
  };
}
