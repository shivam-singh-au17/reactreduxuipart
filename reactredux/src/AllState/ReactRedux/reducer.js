import { ADD_TODOS } from "./actionType";

const initState = {
    todos: [
        {
            id: 1,
            title: "shivam singh",
            status: false
        }
    ]
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODOS: {
            return {
                ...state,
                todos:[...state.todos, payload]
           } 
        }
        default:
            return state;
    }
}

export { reducer };