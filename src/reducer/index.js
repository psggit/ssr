const initialState = {
  list: null,
  isFetching: true
}

const reducer = function (oldState=initialState, action) {
  if (action.type === "USERS_FETCHED") {
    return Object.assign({}, oldState, {
      list: action.response,
      isFetching: false
    })
  }
  return oldState;
};

export default reducer