import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer.js"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistsConfig = {
    key: "persist-key",
    storage
}

const persistedReducer = persistReducer(persistsConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(logger, thunk))
const persistor = persistStore(store)

export default store
export { persistor }