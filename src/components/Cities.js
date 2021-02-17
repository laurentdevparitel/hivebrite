import React, { useEffect } from "react";

// -- Redux
import { useDispatch, useSelector } from "react-redux";


import {getSortedItems} from '../helpers/helpers';

import Loader  from "./Loader/Loader";

// -- Styles
import { Button } from "../styles/styles"

// -- API
import API from '../api/API.js';

const api = new API();

const COMPONENT_NAME = "Cities";

const MAP_HEIGHT = process.env.REACT_APP_MAP_HEIGHT || 500;

const Cities = () => {

    const [loading, setLoading] = React.useState(false);
    //const [cities, setCities] = React.useState([]);

    // Redux
    const dispatch = useDispatch();

    const { cities, city, filteredCities } = useSelector(state => ({
        cities: state.cities,
        city: state.city,
        filteredCities: state.filteredCities,
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
            //console.info(`[${COMPONENT_NAME}.fetchData] >>>> data loaded: `, data);

            if (typeof data !== "undefined") {
                //console.debug(`[${COMPONENT_NAME}.fetchData]: `, data);

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

    /**
     * Show selected city on map
     * @param {Object} city
     * @returns void
     */
    const showCity = (city) => {
        //console.info(`[${COMPONENT_NAME}.showCity]`, city);

        // Redux storage;
        dispatch({type: "SET_CITY", payload: city});
    }

    console.info(`[${COMPONENT_NAME}] loading`, loading);
    //console.info(`[${COMPONENT_NAME}] city`, city);

    const data = (filteredCities && filteredCities.length) ? filteredCities  : cities;
    //console.info(`[${COMPONENT_NAME}] data`, data);

    return (
        <div>
            {
                loading && <Loader />
            }

            <ul className="cities" style={{'maxHeight': MAP_HEIGHT+'px'}}>
                {
                    getSortedItems(data, 'city').map( (item, index) => (
                        <li key={index}>
                            <Button onClick={ e => showCity(item) } selected={city && ( (city.city+city.state) === (item.city+item.state))}>{item.city} ({item.state})</Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Cities;