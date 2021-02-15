import React, { useEffect } from "react";

// -- Redux
import { useDispatch, useSelector } from "react-redux";

import Loader  from "./Loader/Loader";

// -- API
import API from '../api/API.js';

const api = new API();

const COMPONENT_NAME = "Cities";

const Cities = () => {

    const [loading, setLoading] = React.useState(false);
    //const [cities, setCities] = React.useState([]);

    // Redux
    const dispatch = useDispatch();

    const { cities } = useSelector(state => ({
        cities: state.cities,
    }));

    // Load cities on mount
    useEffect(() => {

        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Fetch data from API
     * @returns void
     */
    const fetchData = async () => {
        console.info(`[${COMPONENT_NAME}.fetchData]`);

        setLoading(true);
        dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

        try {
            const data = await api.getCities();
            console.info(`[${COMPONENT_NAME}.fetchData] >>>> data loaded: `, data);

            if (typeof data !== "undefined") {
                console.debug(`[${COMPONENT_NAME}.fetchData]: `, data);

                dispatch({type: "SET_CITIES", payload: data});

                // hide loader
                setLoading(false);
                dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});
            }
        }
        catch(error){
            console.error(`[${COMPONENT_NAME}.fetchData] error`, error);
            setLoading(true);
            dispatch({type: "SET_IS_XHR_RUNNING", payload: loading});

            dispatch({
                type: "SET_APP_MESSAGE",
                payload: {
                    text: API.handleAPIErrorMessages(error).title,
                    severity: "error"
                }
            });
        }
    }

    console.info(`[${COMPONENT_NAME}] loading`, loading);
    //console.info(`[${COMPONENT_NAME}] cities`, cities);

    return (
        <div>
            {
                loading && <Loader />
            }

            <ul>
                {
                    cities.map( (city, index) => (
                        <li key={index}>{city.city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Cities;