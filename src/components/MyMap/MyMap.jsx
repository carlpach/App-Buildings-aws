import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './MyMap.css';

const MyMap = ( { buildings }) => {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: 47.373454, lng: 8.539771 }), []);

  return (
    <div className="b-map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10} >
          { buildings.map((buildg, i) => {
            let latBldg = 47.373454;
            let lngBldg = 8.539771;
            try {
              latBldg = buildg.geometry.location.lat;
              lngBldg  = buildg.geometry.location.lng; 
            } catch {            
            }
            return <Marker key={i} position={{ lat: latBldg, lng: lngBldg }} />
          })
          }
        </GoogleMap>
      )}
    </div>
  );
};

export default MyMap
