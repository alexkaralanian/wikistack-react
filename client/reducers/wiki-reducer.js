// REDUCER

const initialState = {
  allPages: []
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case 'GET_WIKIS':
      newState.allPages = newState.allPages.concat(action.getWikis)
      break;

    default:
      return state;

  }

  return newState;

}

