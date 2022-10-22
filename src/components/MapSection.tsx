import React from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import MapMarkers from './MapMarkers';

export default function MapSection() {
  const googleMapsApiKey: string =
    process.env.REACT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
  });

  if (!isLoaded) return <div>Loadig...</div>;

  return (
    <div>
      <Map />
    </div>
  );
}

function Map() {
  const center = React.useMemo(() => ({ lat: 49.89, lng: -97.13 }), []);
  return (
    <div className='map'>
      <h2 className='map-title'>U-WORK LOCATIONS</h2>
      <div>
        <GoogleMap
          zoom={5}
          center={center}
          mapContainerClassName='map-container'
        >
          <MarkerF position={center} key='winnipeg' />
          <MapMarkers />
        </GoogleMap>
      </div>
    </div>
  );
}
