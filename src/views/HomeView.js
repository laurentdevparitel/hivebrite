import React from 'react';

// -- Styles
import { MainWrapper, Wrapper, CitiesWrapper, MapWrapper, CitySearchWrapper } from "../styles/styles"

import Cities from "../components/Cities";
import Map from "../components/Map/Map";
import CitySearch from "../components/Form/CitySearch";

const HomeView = () => {
    return (
        <MainWrapper>

            <CitySearchWrapper>
                <CitySearch />
            </CitySearchWrapper>

            <Wrapper>
                <CitiesWrapper>
                    <Cities />
                </CitiesWrapper>
                <MapWrapper>
                    <Map />
                </MapWrapper>
            </Wrapper>

        </MainWrapper>
    );
};

export default HomeView;