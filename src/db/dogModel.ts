import { DataTypes } from 'sequelize';
import sequelize from './connection';

const Dog = sequelize.define(
  'animals',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notNull: true }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: true }
    },
    tail_length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, isInt: true }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1, isInt: true }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export default Dog;
