"use strict";
const { Model } = require("sequelize");
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
    Product.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: "Name cant be empty" },
                    notEmpty: { msg: "Name cant be empty" },
                },
            },
            qty: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notNull: { msg: "quantity cant be empty" },
                    notEmpty: { msg: "quantity cant be empty" },
                },
            },
            picture: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    notNull: { msg: "Picture cant be empty" },
                    notEmpty: { msg: "Picture cant be empty" },
                },
            },
            expiredAt: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    notNull: { msg: "Expired date cant be empty" },
                    notEmpty: { msg: "Expired date cant be empty" },
                },
                get() {
                    const date = new Date(this.getDataValue("expiredAt"));
                    let year = date.getFullYear()
                    let month = date.getMonth() + 1
                    let day = date.getDate() 
                    month = month < 10 ? `0${month}` : month
                    day = day < 10 ? `0${day}` : day
                    return date ? `${year}-${month}-${day}` : null
                },
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                validate: {
                    notNull: { msg: "Status product cant be empty" },
                    notEmpty: { msg: "Status product cant be empty" },
                },
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
