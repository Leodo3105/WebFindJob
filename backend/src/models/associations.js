import Country from './country.js';
import City from './city.js';
import District from './district.js';

const associateModels = () => {
  Country.associate();
  City.associate();
  District.associate();
};

export default associateModels;
