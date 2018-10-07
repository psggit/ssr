const initialState = {
  data: {}
}

const repoReducer = (state = initialState, action) => {
    switch (action.type) {
      // case 'SUCCESS_FETCH_REPOS':
      // // const newData = { data: [1] }
      //   return { ...state, data: action.data  }
      default:
        return state;
    }
}

export default repoReducer