import React from 'react';
import MapMarker from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/pages/map.css';
import 'leaflet/dist/leaflet.css';

function MapApp() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={MapMarker} alt="Map Marker" ></img>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Montreal</strong>
          <span>Quebec</span>
        </footer>
      </aside>
      <Map
        center={[45.5230677,-73.5535644]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" ></TileLayer>
      </Map>
      <Link to="" className="create-map">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default MapApp;