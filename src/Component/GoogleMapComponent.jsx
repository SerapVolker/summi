/* eslint-disable no-unused-vars */
// GoogleMapComponent.jsx
import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styled from 'styled-components';

// Стилизованные компоненты
const MapWrapper = styled.div`
  width: 50%;
  height: 400px;
  position: relative;
  border-radius: 0px;
  margin-left: 940px;
  margin-top: -700px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #f5f5f5;
  border-radius: 0px;
  font-family: Arial, sans-serif;
  color: #666;
`;

const InfoWindowContent = styled.div`
  padding: 8px;
  max-width: 200px;
  
  h3 {
    margin: 0 0 8px 0;
    color: #333;
  }
  
  p {
    margin: 0;
    color: #666;
  }
`;

// Стили карты
const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '12px'
};

const defaultCenter = {
  lat: 55.7558,
  lng: 37.6173
};

const libraries = ['places'];

const GoogleMapComponent = ({ apiKey }) => {
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  // Маркеры для отображения
  const markers = [
    {
      id: 1,
      position: { lat: 55.7558, lng: 37.6173 },
      title: 'Москва',
      description: 'Красная площадь'
    },
    {
      id: 2,
      position: { lat: 55.7517, lng: 37.5824 },
      title: 'Москва-Сити',
      description: 'Деловой центр'
    }
  ];

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <MapWrapper>
      <LoadScript 
        googleMapsApiKey={apiKey} 
        libraries={libraries}
        loadingElement={<LoadingContainer>Загрузка карты...</LoadingContainer>}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true
          }}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.position}
              title={marker.title}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
          
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker.position}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <InfoWindowContent>
                <h3>{selectedMarker.title}</h3>
                <p>{selectedMarker.description}</p>
              </InfoWindowContent>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </MapWrapper>
  );
};

export default GoogleMapComponent;