
import { loadData, saveData } from "../../../Utils/localStorage";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType";


const token = loadData("token")

const initState = {
    isAuth: token ? true : false,
    token: token || ""
};

const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS: {
            saveData("token", payload);
            return {
                ...state,
                isAuth: true,
                token: payload
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                token: ""
            }
        }
        default:
            return state;
    }
}

export { authReducer };