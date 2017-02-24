
import axios from 'axios';


// ACTION CREATORS

export const getWikiPages = getWikis => ({
    type: 'GET_WIKIS',
    getWikis
});


// ASYNC ACTION CREATORS | THUNKS

export const submitNewWiki = wikiPage => {
    return (dispatch, getState) => {
        return axios.post('/api/wiki', wikiPage)
          .then(res => res.data)
          .catch(console.error)
    };

};

export const loadAllWikis = () => {
    return dispatch => {
        return axios.get('/api/wiki')
          .then(res => { dispatch(getWikiPages(res.data))
        })
          .catch(console.error)
    }
}

