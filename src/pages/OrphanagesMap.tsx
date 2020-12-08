/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import mapMarker from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Logo" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas Criancas estao esperando sua visita :)</p>
        </header>
        <footer>
          <strong>Umuarama</strong>
          <span>Parana</span>
        </footer>
      </aside>
      <MapContainer
        center={[-23.7671115, -53.3134103]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker icon={mapIcon} position={[-23.7671115, -53.3134103]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxHeight={240}
            className="map-popup"
          >
            Orphanta1
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
