
const ADD_TWIT = 'ADD_TWIT'
const SHOW_TWITS = 'SHOW_TWITS'
const SHOW_USER_TWITS = 'SHOW_USER_TWITS'
const ADD_COMENT = 'ADD_COMENT'

const initialState = {
twits: []
}

export const addTwet = (twit, owner) => {
  return dispatch => {
    dispatch({
      type: ADD_TWIT,
      twit,
      owner
      })
    }
  }

  export const addComent = (coment, twitId) => {
    return dispatch => {
      dispatch({
        type: ADD_COMENT,
        coment,
        twitId
      })
    }
  }

  export default (state = initialState, action) => {
   switch (action.type) {
     case ADD_TWIT:
      return {
        twits: state.twits.concat({
          id: state.twits.length + 1,
          owner: action.owner,
          text: action.twit,
          coments: []
        }),
      }
      case ADD_COMENT:
      console.log(state.twits);
        state.twits[action.twitId].coments.push({
            id: state.twits.length,
            text: action.coment
          })
        return {
          twits: state.twits
        }
   default:
    return state
    }
  }
