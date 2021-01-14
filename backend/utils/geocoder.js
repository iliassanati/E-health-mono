import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'XvhAoG5JhR5wJ3TGEOkuDjoufdK2bo51',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
