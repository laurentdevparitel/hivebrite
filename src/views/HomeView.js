import React from 'react';

// -- Styles
import { Wrapper, CitiesContainer, MapContainer } from "../styles/styles"

import Cities from "../components/Cities";

const HomeView = () => {
    return (
        <Wrapper>
            <CitiesContainer>
                <Cities />
            </CitiesContainer>
            <MapContainer>
                szegze
            </MapContainer>
        </Wrapper>
    );
};

export default HomeView;