import { ADD_TODOS } from "./actionType";

export const addTodo = (payload) => {
    return {
        type: ADD_TODOS,
        payload
    }
}