import React, {useEffect, useRef} from "react";
import {mapType} from "./map-type";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import {connect} from 'react-redux';
import {selectCurrentCityData, selectActiveOfferId} from '../../store/selectors';

const Map = (props) => {
  const {currentCityData, activeOfferId} = props;
  const mapRef = useRef(null);
  let cityLatitude = 0;
  let cityLongitude = 0;
  let cityZoom = 13;
  const MARKER_URL = `/img/pin.svg`;
  const ACTIVE_MARKER_URL = `/img/pin-active.svg`;
  const ICON_SIZE = [30, 40];

  useEffect(() => {
    /* Code below fix LeafLet bug 'Map container is already initialized'
    I use for...in loop because eslint throws error when use '_leaflet_id' as key of mapRef.current */
    if (mapRef.current !== undefined && mapRef.current !== null) {
      for (let key in mapRef.current) {
        if (mapRef.current.hasOwnProperty(key)) {
          if (key.indexOf(`_leaflet_id`) > -1) {
            mapRef.current[key] = null;
          }
        }
      }
    }

    if (Object.keys(currentCityData).length !== 0) {
      cityLatitude = currentCityData[0].city.location.latitude;
      cityLongitude = currentCityData[0].city.location.longitude;
      cityZoom = currentCityData[0].city.location.zoom;
    }

    const city = [cityLatitude, cityLongitude];

    const icon = leaflet.icon({
      iconUrl: MARKER_URL,
      iconSize: ICON_SIZE,
    });
    const activeIcon = leaflet.icon({
      iconUrl: ACTIVE_MARKER_URL,
      iconSize: ICON_SIZE,
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
        icon.iconID = data.id;
        leaflet.marker([data.location.latitude, data.location.longitude], {
          icon: icon.iconID === activeOfferId ? activeIcon : icon,
        }).addTo(map);
      });
    }
  }, [currentCityData, activeOfferId]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`}}></div>
  );
};

Map.propTypes = mapType;

const mapStateToProps = (state) => ({
  currentCityData: selectCurrentCityData(state),
  activeOfferId: selectActiveOfferId(state),
});

export {Map};

export default connect(mapStateToProps)(Map);
