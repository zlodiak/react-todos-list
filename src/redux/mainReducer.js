const mainReducer = function mainReducer(state = { main: [] }, action) {
    switch(action.type) {
        case 'EDIT_MAIN': {
            state = {
                ...state,
                main: action.payload,
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export default mainReducer;