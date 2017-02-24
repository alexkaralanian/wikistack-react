// REDUCER

const initialState = {
  pages: [],
  allPages: []
};

export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) { 

    case 'RECEIVED_WIKI':
      newState.pages = newState.pages.concat(action.wikiPage)
      break;

    case 'GET_WIKIS':
      newState.allPages = newState.allPages.concat(action.getWikis)
      break;

    default:
      return state;

  }

  return newState;

}

