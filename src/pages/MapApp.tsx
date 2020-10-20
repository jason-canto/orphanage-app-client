import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import '../styles/pages/map.css';
import 'leaflet/dist/leaflet.css';
import iconMarker from '../images/map-marker.svg';

function MapApp() {

  const mapIcon = L.icon({
    iconUrl: iconMarker,
    iconSize: [28,38]
  })

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={iconMarker} alt="Map Marker" ></img>
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
        <Marker
          position={[45.5230677,-73.5535644]}
          icon={mapIcon}
        >
          <Popup
            minWidth={240}
            maxWidth={240}
            closeButton={false}
            className="marker-map-popup">
            Test
            <Link to="/map/1">
              <FiArrowRight
                color="#FFF"
                size={32}
              />
            </Link>
          </Popup>
        </Marker>
      </Map>
      <Link to="/map/create" className="create-map">
        <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  )
}

export default MapApp;