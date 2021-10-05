import * as React from 'react';
import { useState } from 'react';
import MapGl, {NavigationControl, ScaleControl, FullscreenControl, Layer, Source} from 'react-map-gl';
import filteredData4sec from "../data/filtered_data_4sec.json"
import {Legend} from "./Legend";
import {Chart} from "./Chart";


export const mapAccessToken = 'pk.eyJ1IjoiYWxpbmF1c292YSIsImEiOiJja3FzNXBhbzQxbjZ1MnducG1ha2JibXkyIn0.RBNyK-wDRQpFj_8yDARbSA'

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};

export function JMapView() {

  const geojsonFeature = {
    type: 'Feature',
    properties: {
      name: 'Coors Field',
      amenity: 'Baseball Stadium',
      popupContent: 'This is where the Rockies play!'
    },
    geometry: {
      type: 'Point',
      coordinates: [-104.99404, 39.75621]
    }
  };

//voc and co2 made a lot of difference
  const getAirQualityWithCO2 = (pm25, pm10, nox, voc, co2) => {
    if (pm25 > 60 || pm10 > 100|| voc > 300 || co2 > 2000) {
      return 5
    } else if (pm25 > 24 || pm10 > 50|| voc > 200 || co2 > 1800) {
      return 4
    } else if (pm25 > 20 || pm10 > 35|| voc > 150 || co2 > 1400) {
      return 3
    } else if (pm25 > 10 || pm10 > 15 || voc > 100 || co2 > 1000) {
      return 2
    } else if (pm25 > 5 || pm10 > 9 || voc > 50 || co2 > 700) {
      return 1
    } else {
      return 0
    }
  }

  const getAirQuality = (pm25, pm10, nox, voc, co2) => {
    if (pm25 > 60 || pm10 > 100|| voc > 300) {
      return 5
    } else if (pm25 > 24 || pm10 > 50|| voc > 200) {
      return 4
    } else if (pm25 > 20 || pm10 > 35|| voc > 150) {
      return 3
    } else if (pm25 > 10 || pm10 > 15 || voc > 100) {
      return 2
    } else if (pm25 > 5 || pm10 > 9 || voc > 50) {
      return 1
    } else {
      return 0
    }
  }

  const realGeojson = {
    type: 'FeatureCollection',
    features: filteredData4sec.map((el) => {
      return {type: 'Feature', properties: {percentile: 0, quality: getAirQuality(el["pm2.5"], el.pm10, el.nox, el.voc, el.co2), timestamp: el.timestamp}, geometry: {type: 'Point', coordinates: [parseFloat(el.lon), parseFloat(el.lat)]}}
    })
  }

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };

  const layerStylePoints = {
    id: 'point',
    type: 'circle',
    'paint': {
// Make circles larger as the user zooms from z12 to z22.
      'circle-radius': {
        'base': 1.75,
        'stops': [
          [9, 2],
          [19, 180]
        ]
      },
      'circle-opacity': 0.5,
      'circle-blur': 0.9,
// Color circles by ethnicity, using a `match` expression.
      'circle-color':
      [
        'match',
        ['get', 'quality'],
        0,
        '#3bc5fb',
        1,
        '#4aff96',
        2,
        '#ffd769',
        3,
        '#e08c10',
        4,
        '#e04f4f',
        5,
        '#853774',
        /* other */ '#777777'
      ]
    }
  };

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 48.137154,
    longitude: 11.576124,
    zoom: 12
  });

  const navControlStyle= {
    right: 20,
    top: 60
  };

  const scaleControlStyle= {
    right: 60,
    bottom: 8,
    color: 'gray',
    opacity: 0.6
  };

  const fullscreenControlStyle= {
    right: 20,
    top: 10
  };

  // @ts-ignore
  return (
    <div className="relative bg-white flex">
      <div className="">
    <MapGl
      {...viewport}
      width='100vw'
      height='88vh'
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapAccessToken}
    >
      <NavigationControl style={navControlStyle} />
      <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <Source id="my-data2" type="geojson" data={realGeojson}>
        <Layer {...layerStylePoints}/>
      </Source>
    </MapGl>
        <Legend/>
        {/*<div className="flex flex-col absolute z-50 bottom-20 m-4">*/}
        {/*  <button className="rounded h-10 m-1 bg-blue-400">*/}
        {/*    <span className="p-6 text-white font-semibold">*/}
        {/*      Air Quality*/}
        {/*    </span>*/}
        {/*  </button>*/}

        {/*  <button className="rounded border-2 border-gray-500 h-10 m-1">*/}
        {/*    <span className="p-6">*/}
        {/*      PM2.5*/}
        {/*    </span>*/}
        {/*  </button>*/}
        {/*  <button className="rounded border-2 border-gray-500 h-10 m-1">*/}
        {/*    <span className="p-6">*/}
        {/*      VOCx*/}
        {/*    </span>*/}
        {/*  </button>*/}


        {/*</div>*/}
      </div>
    </div>
  );
}