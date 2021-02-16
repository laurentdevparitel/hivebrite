import React from "react";

// -- Redux
import { useSelector } from "react-redux";

// -- Leaflet
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const COMPONENT_NAME = "Map";

const MAP_HEIGHT = process.env.REACT_APP_MAP_HEIGHT || 500;
const DEFAULT_CITY = {
    city: "London",
    latitude: 51.505,
    longitude: -0.09,
}

const Map = () => {
    console.info(`[${COMPONENT_NAME}] MAP_HEIGHT`, MAP_HEIGHT);

    const { city } = useSelector(state => ({
        city: state.city,
    }));
    console.info(`[${COMPONENT_NAME}] city`, city);

    const city_properties = {
        city: city ? city.city : DEFAULT_CITY.city,
        lat: city ? city.latitude : DEFAULT_CITY.latitude,
        lng: city ? city.longitude : DEFAULT_CITY.longitude,
    }
    console.info(`[${COMPONENT_NAME}] city_properties`, city_properties);

    const LocationMarker = () => {
        console.info(`[${COMPONENT_NAME}].LocationMarker`);

        const map = useMap();

        if (!city_properties || !city_properties.lat || !city_properties.lng){
            return null;
        }
        map.flyTo({lat: city_properties.lat, lng: city_properties.lng}, map.getZoom());

        return (
            <Marker position={{lat: city_properties.lat, lng: city_properties.lng}}>
                <Popup>{city_properties.city}</Popup>
            </Marker>
        )
    }

    return (
        <MapContainer center={[city_properties.lat, city_properties.lng]} zoom={13} scrollWheelZoom={false} style={{height: MAP_HEIGHT+'px'}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    )
}

export default Map;