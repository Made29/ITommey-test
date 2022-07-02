'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNull: { msg: "Name cant be empty" },
        notEmpty: { msg: "Name cant be empty" }
      }
    }, 
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNull: { msg: "quantity cant be empty" },
        notEmpty: { msg: "quantity cant be empty" }
      }
    }, 
    picture: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isNull: { msg: "Picture cant be empty" },
        notEmpty: { msg: "Picture cant be empty" }
      }
    }, 
    expiredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isNull: { msg: "Expired date cant be empty" },
        notEmpty: { msg: "Expired date cant be empty" }
      }
    }, 
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        isNull: { msg: "Status product cant be empty" },
        notEmpty: { msg: "Status product cant be empty" }
      }
    }, 
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};