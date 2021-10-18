import { loadData, saveData } from "../../../Utils/localStorage";
import { ADD_TODOS } from "./actionType";

const initState = {
    todos: loadData("todos") || []
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODOS: {
            const updateTodo = [...state.todos, payload];
            saveData("todos", updateTodo);
            return {
                ...state,
                todos: updateTodo
           } 
        }
        default:
            return state;
    }
}

export { reducer };