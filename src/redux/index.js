import { createBrowserHistory } from "history"
import { syncHistoryWithStore } from "react-router-redux"

import Store from "./store"

const initialState = {}
const store = Store(initialState)
const history = syncHistoryWithStore(createBrowserHistory(), store)

export { history, store }
