function reducer(state, action) {
    switch (action.type) {
        case "PAUSE":
            return {
                ...state,
                time: action.payload
            };
        case "PLAY":
            return {
                ...state,
                time: action.payload
            };
        case "STOP":
            return {
                ...state,
                time: action.payload
            };
        case "RESET":
            return {
                ...state,
                time: action.payload
            };
        default:
            return state;
    }
}

export default reducer;