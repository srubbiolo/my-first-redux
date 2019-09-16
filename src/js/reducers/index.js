import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        /*
        *******half spread half concat
        return {...state, articles: state.articles.concat(action.payload)}

        *******assign and concat no spread operators
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });

        this last and working one full spread array and object NICE
        */
        return {...state, articles: [...state.articles, action.payload]}
    }

    //TODO do homework and create DATA_LOADED CONSTAT
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    
    return state;
};

export default rootReducer;