/* eslint-disable prettier/prettier */

import React, { useState,useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import {useParams} from 'react-router-dom';



import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';


import '../styles/pages/orphanage.css';

interface OrphanagePrp {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: [
    {
      url: string;
    }
  ]
}

interface RootParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<RootParams>();
  const [orphanage, setOrphanage] = useState<OrphanagePrp>();

//  console.log(orphanage?.images);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);

    });
  }, [params.id]);



  if (!orphanage) {
    return (
      <p>Carregando ....</p>
    )
  }

  return (
    <div id="page-orphanage">

      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[0].url[0]}
            alt="Kids"
          />
          <div className="images">
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
            <button className="active" type="button">
              <img
                src="https://www.google.com.br/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FJJoxxi_happy-kids-png-kids-hands-up-transparent-png%2F&psig=AOvVaw3ZktwRt6iloqwSgcKKt-0a&ust=1607091486181000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTq76Asu0CFQAAAAAdAAAAABAI"
                alt="kids2"
              />
            </button>
          </div>
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <MapContainer
                center={[-23.7671115, -53.3134103]}
                zoom={15}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
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

              <footer>
                <a href="/">Ver Rotas no mapa</a>
              </footer>
            </div>
            <hr />

            <h2>Intrucoes para visita</h2>
            <p>
              Venha conhecer e sinta-se mais a vontade, trazendo muito amor para
              dar
            </p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#39cc83" />
                atendemos
                {' '}
                <br />
                fim de semana
              </div>
            </div>
            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#fff" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
