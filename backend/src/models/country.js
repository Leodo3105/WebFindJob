import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import City from './city.js';

const Country = sequelize.define('Country', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'countries',
  timestamps: false,
});

Country.associate = () => {
  Country.hasMany(City, { foreignKey: 'countryId', as: 'cities' });
};

export default Country;
