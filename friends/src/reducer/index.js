import { combineReducers, createStore } from "redux"

const initialState = {
    title: 'friends'
}

const sharedReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    app: sharedReducer
})

export const store = createStore(reducers);
