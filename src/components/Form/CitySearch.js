import React, { useEffect } from "react";

// -- Redux
import { useDispatch, useSelector } from "react-redux";

import { searchOnProperty } from '../../helpers/helpers';

import { InputTextField } from "../../styles/styles"

const CitySearch = () => {

    // Redux
    const { cities } = useSelector(state => ({
        cities: state.cities,
    }));

    const dispatch = useDispatch();

    /**
     * Filtering on local cities
     * @param {Event} e
     * @returns void
     */
    const handleSearchFilterChange = (e) => {

        const filteredCities = searchOnProperty(cities, e.target.value, 'city');

        // Redux storage
        dispatch({type: "SET_FILTERED_CITIES", payload: filteredCities});
    }

    return (
        <form>
            <div>
                <InputTextField type="text" name="city" placeholder="Filter by city ..." onChange={handleSearchFilterChange} />
            </div>
        </form>
    );
}



export default CitySearch;