// const initialState = {
//   data: {}
// }

// const repoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       // case 'SUCCESS_FETCH_REPOS':
//       // // const newData = { data: [1] }
//       //   return { ...state, data: action.data  }
//       default:
//         return state;
//     }
// }

// export default repoReducer


// reducer.js
//import { USERS_FETCHED } from './constants';

function getInitialState() {
  return { items: {} };
}

const reducer = function (oldState = getInitialState(), action) {
  if (action.type === "USERS_FETCHED") {
    return { items: action.response.data };
  }
  return oldState;
};

export default reducer