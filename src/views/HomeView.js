import React from 'react';

// -- Styles
import { Wrapper, CitiesWrapper, MapWrapper } from "../styles/styles"

import Cities from "../components/Cities";
import Map from "../components/Map/Map";

const HomeView = () => {
    return (
        <Wrapper>
            <CitiesWrapper>
                <Cities />
            </CitiesWrapper>
            <MapWrapper>
                <Map />
            </MapWrapper>
        </Wrapper>
    );
};

export default HomeView;