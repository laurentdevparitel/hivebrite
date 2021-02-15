import {

    SET_CITIES,
    SET_CITY,
    SET_APP_MESSAGE,
    SET_IS_XHR_RUNNING,

} from "../constants/action-types.js";


const initialState = {

    cities: [],  // fetched cities from API
    city: null,    // selected city
    appMessage: {   // app success / error messages (cf: MuiAlert)
        text: null,   // message
        severity: "success"    // success|warning|info|error
    },
    isXHRRunning: false,    // is XHR request running ?
};

/*
  Avoiding mutations in Redux :
  Using concat(), slice(), and …spread for arrays
  Using Object.assign() and …spread for objects
  https://medium.com/@nitish15p/immutable-object-and-array-operations-in-javascript-86047609532
*/

const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_CITIES:
            return { ...state, cities: action.payload };

        case SET_CITY:
            return { ...state, city: action.payload };

        case SET_APP_MESSAGE:
            return { ...state, appMessage: action.payload };

        case SET_IS_XHR_RUNNING:
            return { ...state, isXHRRunning: action.payload };

        default:
            return state;
    }
};

// Remove an item inside items Array
/*const removeItem = (items, index) => {
    //items.slice(0, index-1).concat(items.slice(index, items.length))  // KO
    items.filter(function(value, i) {
        return i !== index;
    });
}*/

export default rootReducer;
