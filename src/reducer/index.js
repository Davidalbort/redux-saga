
export const reducer = (state=[],action) => {
    switch(action.type){
        case '@character/show':
            return [action.payload];
        default:
            return state;
    }
}

