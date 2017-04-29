import { RECEIVE_POSTS } from './constants'

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS: return action.posts
    default: return state
  }
}

export default postReducer
