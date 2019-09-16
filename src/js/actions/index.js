import { ADD_ARTICLE } from '../constants/action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};
//THIS WAS WITH THUNK
// export function getData() {
//   return function(dispatch) {
//     return fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }

//THIS IS WITH SAGA
export function getData() {
  return { type: "DATA_REQUESTED" };
}