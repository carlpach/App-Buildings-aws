import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import './MyMap.css';

var MyMap = function MyMap(_ref) {
  var buildings = _ref.buildings;

  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  var _useLoadScript = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  }),
      isLoaded = _useLoadScript.isLoaded;

  var center = useMemo(function () {
    return { lat: 47.373454, lng: 8.539771 };
  }, []);

  return React.createElement(
    "div",
    { className: "b-map" },
    !isLoaded ? React.createElement(
      "h1",
      null,
      "Loading..."
    ) : React.createElement(
      GoogleMap,
      {
        mapContainerClassName: "map-container",
        center: center,
        zoom: 10 },
      buildings.map(function (buildg, i) {
        var latBldg = 47.373454;
        var lngBldg = 8.539771;
        try {
          latBldg = buildg.geometry.location.lat;
          lngBldg = buildg.geometry.location.lng;
        } catch (error) {}
        return React.createElement(Marker, { key: i, position: { lat: latBldg, lng: lngBldg } });
      })
    )
  );
};

export default MyMap;