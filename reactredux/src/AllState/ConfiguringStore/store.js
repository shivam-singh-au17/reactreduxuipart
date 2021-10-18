import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import { authReducer } from "./Auth/reducer";
import { reducer } from "./Todo/reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    todoApp: reducer
})

/**
 * 
 * @param {redux state} state
 */

const logger = (state) => (next) => (action) => {
    console.log("Dispatching Action,", action, next, state);
    const val = next(action);
    console.log("Exiting Logger");
    return val;
}

const logger2 = (state) => (next) => (action) => {
    console.log("Dispatching Action From Logger 2,", action, next, state);
    const val = next(action);
    console.log("Exiting From Logger 2");
    return val;
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger, logger2),
);

export const store = createStore(rootReducer, enhancer);