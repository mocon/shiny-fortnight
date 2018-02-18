// import * as actions from "../actions/artworks"
import {
  FETCH_START,
  FETCH_SUCCESS,
  UPDATE_SEARCH,
  FAVORITE_TOGGLE
} from "../actions/actionTypes"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return action;
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      })
    case UPDATE_SEARCH:
      return Object.assign({}, state, {
        search: action.search
      })
    case FAVORITE_TOGGLE:
      console.log(`${FAVORITE_TOGGLE} reducer`)
      return action;
    default:
      return state
  }
}
