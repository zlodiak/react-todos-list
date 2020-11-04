const headerReducer = function headerReducer(state = { header: [] }, action) {
    switch(action.type) {
        case 'EDIT_HEADER': {
            state = {
                ...state,
                header: action.payload,
            };
            break;
        }
        default:
            return state;
    }
    return state;
}

export default headerReducer;