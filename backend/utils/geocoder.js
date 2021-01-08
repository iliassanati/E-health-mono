import NodeGeocoder from 'node-geocoder';

const options = {
  provider: 'mapquest',
  httpAdapter: 'https',
  apiKey: 'VnB3rQ1HAzidmzWIJbCnRwGVU0HAojU9',
  formatter: null,
};

const geocoder = NodeGeocoder(options);

export default geocoder;
