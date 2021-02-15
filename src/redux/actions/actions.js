import {

    SET_CITIES,
    SET_CITY,
    SET_APP_MESSAGE,
    SET_IS_XHR_RUNNING,

} from "../constants/action-types.js";

export const setCities = cities => ({ type: SET_CITIES, payload: cities });
export const setCity = city => ({ type: SET_CITY, payload: city });

export const setAppMessage = appMessage => ({ type: SET_APP_MESSAGE, payload: appMessage });
export const setIsXHRRunning = isXHRRunning => ({ type: SET_IS_XHR_RUNNING, payload: isXHRRunning });

