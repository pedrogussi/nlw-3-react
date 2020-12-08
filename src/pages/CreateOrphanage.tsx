/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { FiPlus } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';



import '../styles/pages/create-orphanage.css';
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';




export default function OrphanagesMap() {
  return (
    <div id="page-create-orphanage">
      <Sidebar />
      <main>
        <form className="create-orphanage-form">

          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-23.7671115, -53.3134103]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-23.7671115, -53.3134103]}
              />
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                {' '}
                <span>Maximo de 300 caracteres</span>
              </label>
              <input id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />
              <button className="new-image" type="button">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitacao</legend>
            <div className="input-block">
              <label htmlFor="instructions">instrucoes</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="open_hours">Nome</label>
              <input id="open_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim e semana?</label>

              <div className="button-select">
                <button type="button" className="active">
                  sim
                </button>
                <button type="button">nao</button>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
    );
  }
