
const GET_USERS = 'GET_USERS'
const LOGIN = 'LOGIN'
const LOG_OUT = 'LOG_OUT'
const UPDATE_USER_TWITS = 'UPDATE_USER_TWITS'

const initialState = {
  users: [],
  currUser: null,
  isLogin: false
}

export const login = name => {
  return dispatch => {
    dispatch({
      type: LOGIN,
      user: name
        })
      }
    }

export const updateUserTwits = (user, twit) => {
  return dispatch => {
    dispatch({
      type: UPDATE_USER_TWITS,
      user,
      twit
      })
  }
}

export const logOut = twit => {
  return dispatch => {
    dispatch({
      type: LOG_OUT,
      })
    }
  }

  export default (state = initialState, action) => {
   switch (action.type) {
    case LOGIN:
      return {
        users: state.users.concat({
          id: state.users.length + 1,
          name: action.user,
          twits: []
        }),
        currUser: {
          id: state.users.length + 1,
          name: action.user,
          twits: []
        },
        isLogin: true
          }
      case LOG_OUT:
        return {
          users: state.users,
          currUser: null,
          isLogin: false
        }
    case UPDATE_USER_TWITS:
      state.users[action.user.id -1].twits.push(action.twit)
      return {
        users: state.users ,
        currUser: state.currUser,
        isLogin: true
        }
    default:
     return state
     }
  }
