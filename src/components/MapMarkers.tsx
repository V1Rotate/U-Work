import { MarkerF } from '@react-google-maps/api';

function MapMarkers() {
  return (
    <div className='map-markers'>
      <MarkerF position={{ lat: 43.25, lng: -79.84 }} key='hamilton' />
      <MarkerF position={{ lat: 45.42, lng: -75.69 }} key='ottawa' />
      <MarkerF position={{ lat: 43.65, lng: -79.34 }} key='toronto' />
      <MarkerF position={{ lat: 45.5, lng: -73.56 }} key='montreal' />
      <MarkerF position={{ lat: 48.38, lng: -89.24 }} key='thunderbay' />
      <MarkerF position={{ lat: 49.76, lng: -94.48 }} key='kenora' />
      <MarkerF position={{ lat: 49.52, lng: -96.69 }} key='steinbach' />
      <MarkerF position={{ lat: 50.63, lng: -96.98 }} key='gimli' />
      <MarkerF position={{ lat: 49.18, lng: -97.93 }} key='winkler' />
      <MarkerF position={{ lat: 50.44, lng: -104.61 }} key='regina' />
      <MarkerF position={{ lat: 52.14, lng: -106.64 }} key='saskatoon' />
      <MarkerF position={{ lat: 51.04, lng: -114.06 }} key='calgary' />
      <MarkerF position={{ lat: 53.63, lng: -113.32 }} key='edmonton' />
      <MarkerF position={{ lat: 52.26, lng: -113.81 }} key='reddeer' />
      <MarkerF position={{ lat: 49.88, lng: -119.47 }} key='kelowna' />
      <MarkerF position={{ lat: 49.24, lng: -123.11 }} key='vancouver' />
      <MarkerF position={{ lat: 48.4, lng: -123.32 }} key='victoria' />
      <MarkerF position={{ lat: 40.73, lng: -73.93 }} key='newyork' />
      <MarkerF position={{ lat: 25.79, lng: -80.13 }} key='miami' />
      <MarkerF position={{ lat: 34.05, lng: -118.27 }} key='losangeles' />
      <MarkerF position={{ lat: 47.62, lng: -122.34 }} key='seattle' />
      <MarkerF position={{ lat: 45.51, lng: -122.67 }} key='portland' />
      <MarkerF position={{ lat: 36.11, lng: -115.17 }} key='lasvegas' />
      <MarkerF position={{ lat: 33.48, lng: -112.07 }} key='phoenix' />
      <MarkerF position={{ lat: 35.1, lng: -106.62 }} key='newmexico' />
      <MarkerF position={{ lat: 44.91, lng: -123.31 }} key='dallas' />
      <MarkerF position={{ lat: 35.22, lng: -80.84 }} key='charlotte' />
      <MarkerF position={{ lat: 41.73, lng: -87.55 }} key='chicago' />
      <MarkerF position={{ lat: 44.98, lng: -93.25 }} key='minneapolis' />
      <MarkerF position={{ lat: 42.36, lng: -71.05 }} key='boston' />
      <MarkerF position={{ lat: 44.65, lng: -63.58 }} key='halifax' />
      <MarkerF position={{ lat: 55.74, lng: -97.85 }} key='thompson' />
    </div>
  );
}

export default MapMarkers;
