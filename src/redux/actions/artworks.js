/* global process */
import * as types from "./actionTypes"

const ENDPOINT_URL = `${process.env.PUBLIC_URL}/api/data.json`;

export function fetchStart() {
  return (dispatch) => {
    return fetch(ENDPOINT_URL)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchSuccess(json))
      })
      .catch(err => console.error(err.message))
  }
}

export function fetchSuccess(json) {
  return {
    type: types.FETCH_SUCCESS,
    items: json
  }
}

export function updateSearch(string) {
  return {
    type: types.UPDATE_SEARCH,
    search: string
  }
}

export function favoriteToggle(itemId) {
  return {
    type: types.FAVORITE_TOGGLE,
    itemId: itemId
  }
}
