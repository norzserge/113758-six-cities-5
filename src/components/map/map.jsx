import React, {PureComponent} from "react";
import {mapType} from "./map-type";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 40],
    });
    const zoom = 12;
    const map = leaflet.map(`map`, {
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
    offers.forEach((offer) => {
      leaflet.marker(offer.coordinate, {icon}).addTo(map);
    });
  }
}

Map.propTypes = mapType;

export default Map;
