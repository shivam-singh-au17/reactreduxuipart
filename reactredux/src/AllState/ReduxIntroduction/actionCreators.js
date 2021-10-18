// ALL ACTIONS CREATORS

import { Add_Todo, Toggle_Todo, AddCount, SubCount, AddTodods, MultiplyCount, DivideCount } from "./actionTypes"

// PRE CLASS

export const addTodopPre = (payload) => ({
    type: Add_Todo,
    payload: {
        title: payload,
        status: false
    }
})

export const toggleTodo = payload => ({
    type: Toggle_Todo,
    payload
})



//  ASSG PART / CLASS PART



export const addCount = (data) => {
    return { type: AddCount, payLoad: data }
}

export const subCount = (data) => {
    return { type: SubCount, payLoad: data }
}

export const multiplyCount = (data) => {
    return { type: MultiplyCount, payLoad: data }
}

export const divideCount = (data) => {
    return { type: DivideCount, payLoad: data }
}

export const addTodo = (data) => {
    return {
        type: AddTodods,
        payLoad: data,
    }
}