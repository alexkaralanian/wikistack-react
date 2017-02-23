
import axios from 'axios';
import store from '../store';


// ACTION CREATORS

export const receivedWikiPage = wikiPage => ({
    type: 'RECEIVED_WIKI',
    wikiPage
});

export const getWikiPages = getWikis => ({
    type: 'GET_WIKIS',
    getWikis
});


// ASYNC ACTION CREATORS | THUNKS

export const addNewWiki = wikiPage => {

  return (dispatch, getState) => {

    return axios.post('/api/wiki', wikiPage)
      .then(res => res.data)

      .catch(console.error)
  };

};

