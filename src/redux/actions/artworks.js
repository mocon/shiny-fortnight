import * as types from "./actionTypes"

const ENDPOINT_URL = `${process.env.PUBLIC_URL}/api/data.json`;

export function fetchStart() {
  return (dispatch) => {
    return fetch(ENDPOINT_URL)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(fetchSuccess(json))
      })
      .catch(err => console.error(err.message))
  }
}

export function fetchSuccess(json) {
  return {
    type: types.FETCH_SUCCESS,
    data: json
  }
}

export function updateSearch() {
  //
}

export function favoriteToggle() {
  //
}
