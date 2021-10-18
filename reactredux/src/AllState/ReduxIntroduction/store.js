import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk";
// import { addCount, subCount, addTodo } from "./actionCreators.js";
import { reducerFn } from "./reducers";



// class Store {
//     constructor(reducerFn, initialState) {
//         this.reducer = reducerFn;
//         this.state = initialState;
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//         this.state = this.reducer(this.state, action)
//     }
// }

const initialState = {
    counter: 0,
    todos: []
}

export const store = createStore(reducerFn, initialState, applyMiddleware(thunk));


// store.dispatch(addCount(1))
// store.dispatch(addCount(1))
// store.dispatch(subCount(1))
// store.dispatch(addTodo({ id: 1, state: false, title: "Learn React" }))

// console.log(store.getState());

