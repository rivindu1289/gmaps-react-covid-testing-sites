import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map';

function App(props) {
  return (
    <Map
     google={props.google}
     center={{lat: 41.1504665, lng: -74.0074635}}
     height='75vh'
     zoom={6}
    />
  );
}

export default App;
