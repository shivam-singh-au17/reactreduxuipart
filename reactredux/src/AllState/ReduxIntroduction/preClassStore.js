
import { createStore } from "redux";
import { addTodopPre, toggleTodo } from "./actionCreators.js";
import { reducer } from "./reducers.js";


// REDUCER 

/*


// First EXAMPLE


const reducer = (state, action) => ({
    ...state, ...action.payload
})



// SECOND EXAMPLE


class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }
}

*/


// INITIAL STATE 

const initialState = {
    todos: []
}


let store = createStore(reducer, initialState)

console.log('initialState:', store.getState())

/*

store.dispatch({
    type: Add_Todo, payload: {
        title: "Buy Milk",
        status: false
    }
})

store.dispatch({
    type: Add_Todo, payload: {
        title: "Buy Bread",
        status: false
    }
})

store.dispatch({ type: Toggle_Todo, payload: "Buy Bread" })


*/

store.dispatch(addTodopPre("Buy Milk"))
store.dispatch(addTodopPre("Buy Bread"))
store.dispatch(toggleTodo("Buy Bread"))


console.log('store:', store.getState())


export default store;