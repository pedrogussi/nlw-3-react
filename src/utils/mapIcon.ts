import Leaflet from 'leaflet';

import mapMarker from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 34],

  popupAnchor: [170, 30],
});

export default mapIcon;
