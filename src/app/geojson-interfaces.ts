interface Metadata {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
}

interface Properties {
  mag: number;
  place: string;
  time: number;
  updated: number;
  tz: any; // Type might need to be adjusted based on the actual data
  url: string;
  detail: string;
  // Add other properties as needed
}

interface Geometry {
  type: string;
  coordinates: number[];
}

interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

interface FeatureCollection {
  type: string;
  metadata: Metadata;
  features: Feature[];
}

const data: FeatureCollection = {
  type: 'FeatureCollection',
  metadata: {
    generated: 1647747740000,
    url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&endtime',
    title: 'USGS Earthquakes',
    status: 200,
    api: '1.13.3',
    count: 9584,
  },
  features: [
    {
      type: 'Feature',
      properties: {
        mag: 2.35,
        place: '5km ESE of Aromas, CA',
        time: 1647747373000,
        updated: 1647747684878,
        tz: null,
        url: 'https://earthquake.usgs.gov/earthquakes/eventpage/nc73708001',
        detail:
          'https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=nc73708001&format=geojson',
        // Add other properties as needed
      },
      geometry: {
        type: 'Point',
        coordinates: [-121.5946655, 36.8634987, 5.32],
      },
      id: 'nc73708001',
    },
    // Add other features as needed
  ],
};
export { Metadata, Properties, Geometry, Feature, FeatureCollection };
