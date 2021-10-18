
// import { Add_Todo, Toggle_Todo, AddCount, SubCount, AddTodods, MultiplyCount, DivideCount } from "./actionTypes"
import {AddCount, SubCount, AddTodods, MultiplyCount, DivideCount } from "./actionTypes"

export const reducerFn = (state, { type, payLoad }) => {

    switch (type) {
        case AddCount:
            return {
                ...state,
                counter: state.counter + payLoad
            };
        case SubCount:
            return {
                ...state,
                counter: state.counter - payLoad
            };
        case AddTodods:
            return {
                ...state,
                todos: [...state.todos, { ...payLoad }]
            }
        case MultiplyCount:
            return {
                ...state,
                counter: state.counter * payLoad
            };
        case DivideCount:
            return {
                ...state,
                counter: state.counter / payLoad
            };
        default:
            return { ...state }
    }

}

//  PRE CLASS


/*

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case Add_Todo:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case Toggle_Todo:
            return {
                ...state,
                todos: state.todos.map(item => item.title === payload ? { ...item, status: !item.status } : item)
            }
        default:
            return state
    }
}


*/