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
  favorites: [], // ID's of Products
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
      let favorites = state.favorites;
      const itExists = (favorites.includes(action.itemId)) ? true : false

      if (itExists) {
        const index = favorites.indexOf(action.itemId)

        if (index > -1) {
          favorites.splice(index, 1)
        }
      } else {
        favorites.push(action.itemId)
      }

      return Object.assign({}, state, {
        favorites: favorites
      })
    default:
      return state
  }
}
