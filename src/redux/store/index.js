import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import thunkMiddleware from "redux-thunk" // lets us dispatch() functions

import rootReducer from "../reducers"

export default (preloadedState: Object) => {
  if (typeof window !== "undefined") {
    return createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }
  return createStore(rootReducer, preloadedState)
}
