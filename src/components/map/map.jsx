import React, {useEffect, useRef} from "react";
import {mapType} from "./map-type";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux'; 

const Map = (props) => {
  const {currentCityData} = props;
  const mapRef = useRef(null);
  let cityLatitude = 0;
  let cityLongitude = 0;
  let cityZoom = 13;

  if (mapRef.current !== undefined && mapRef.current !== null) {
    mapRef.current._leaflet_id = null;
  }

  useEffect(() => {
    if (Object.keys(currentCityData).length !== 0) {
      cityLatitude = currentCityData[0].city.location.latitude;
      cityLongitude = currentCityData[0].city.location.longitude;
      cityZoom = currentCityData[0].city.location.zoom;
    }

    const city = [cityLatitude, cityLongitude];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 40],
    });
    const zoom = cityZoom;
    const map = leaflet.map(mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution:
            `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map);

    map.setView(city, zoom);

    if (Object.keys(currentCityData).length !== 0) {
      currentCityData.forEach((data) => {
        leaflet.marker([data.location.latitude, data.location.longitude], {icon}).addTo(map);
      });
    }
  }, [currentCityData]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`}}></div>
  );
}

Map.propTypes = mapType;

const mapStateToProps = (state) => ({
  currentCityData: state.currentCityData,
});

export {Map};

export default connect(mapStateToProps)(Map);
