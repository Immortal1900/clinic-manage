const initialState = {

    isLoading : false

};

const Loading = (state = initialState, action) => {

    switch (action.type) {
        case "LoadStart": return {
            ...state, isLoading : true
        };
        case "LoadEnd": return {
            ...state, isLoading : false
        };
        default: return state;
    }
}

export default Loading;