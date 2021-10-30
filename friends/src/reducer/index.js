import { combineReducers, createStore } from "redux"

const initialState = {
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com'
}

const sharedReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const reducers = combineReducers({
    app: sharedReducer
})

export const store = createStore(reducers);
