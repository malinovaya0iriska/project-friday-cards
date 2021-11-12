type InitialStateType = {
    name: string,
    password: string,
    rememberMe: boolean
}
const initState = {
    name: "",
    password: 'fdffdhg',
    rememberMe: false
}

export const loginReducer = (state = initState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


