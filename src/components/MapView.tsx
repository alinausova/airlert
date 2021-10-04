import * as React from 'react';
import { useState } from 'react';
import MapGl, {GeolocateControl, NavigationControl, ScaleControl, FullscreenControl, Layer, Source} from 'react-map-gl';

export const mapAccessToken = 'pk.eyJ1IjoiYWxpbmF1c292YSIsImEiOiJja3FzNXBhbzQxbjZ1MnducG1ha2JibXkyIn0.RBNyK-wDRQpFj_8yDARbSA'

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};



const MAX_ZOOM_LEVEL = 9;

export const heatmapLayer = {
  maxzoom: MAX_ZOOM_LEVEL,
  type: 'heatmap',
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      0.9,
      'rgb(255,201,101)'
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, 20],
    // Transition from heatmap to circle layer by zoom level
    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0]
  }
};

export function MapView() {

  const geojsonFeature = {
    type: 'Feature' as const,
    properties: {
      name: 'Coors Field',
      amenity: 'Baseball Stadium',
      popupContent: 'This is where the Rockies play!'
    },
    geometry: {
      type: 'Point' as const,
      coordinates: [-104.99404, 39.75621]
    }
  };

  const geojson = {
    type: 'FeatureCollection' as const,
    features: [
      geojsonFeature
      // {type: 'Feature' as const, geometry: {type: 'Point' as const, coordinates: [-122.4, 37.8]}},
      // {type: 'Feature' as const, geometry: {type: 'Point' as const, coordinates: [-124.4, 36.8]}},
      // {type: 'Feature' as const, geometry: {type: 'Point' as const, coordinates: [-126.4, 35.8]}},
      // {type: 'Feature' as const, geometry: {type: 'Point' as const, coordinates: [-128.4, 34.8]}},
    ]
  };


  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };

  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
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
    <MapGl
      {...viewport}
      width='100vw'
      height='58vh'
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapAccessToken}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
      />
      <NavigationControl style={navControlStyle} />
      <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
      <FullscreenControl style={fullscreenControlStyle} />

      <Source id="my-data" type="geojson" data={geojson}>
        <Layer id={layerStyle.id} type='circle' paint={layerStyle.paint}/>
      </Source>
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer id={layerStyle.id} type='circle' paint={layerStyle.paint}/>
      </Source>
    </MapGl>
  );
}