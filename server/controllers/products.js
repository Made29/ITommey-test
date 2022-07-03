const { Product } = require("../models");
const { Op } = require("sequelize");

class Controller {
    static async addProduct(req, res, next) {
        try {
            const { name, qty, picture, expiredAt } = req.body;
            console.log("req.body: ", req.body);

            const newProduct = await Product.create({
                name,
                qty,
                picture,
                expiredAt,
                isActive: true,
            });

            res.status(201).json({
                message: "Product has been added",
                newProduct,
            });
        } catch (error) {
            next(error);
        }
    }

    static async fetchAllProducts(req, res, next) {
        const { filter, sort, page } = req.query;
        const productFilter = { where: { isActive: true }, attributes: { exclude: ["createdAt", "updatedAt"] } };

        if (filter) {
            if (filter.name) {
                const query = filter.name;

                productFilter.where = {
                    name: {
                        [Op.substring]: query,
                    },
                };
            }
        }

        if (sort) {
            productFilter.order = [[sort, "ASC"]];
        }

        let limit;
        let offset;

        if(page){
            if(page.size){
                limit = page.size
                productFilter.limit = limit
            }

            if(page.number){
                offset = page.number * limit - limit
                productFilter.offset = offset
            }
        }

        try {
            const products = await Product.findAll(productFilter);

            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    static async getOneProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);

            if (!product) {
                throw {
                    name: "PRODUCT_NOT_FOUND",
                    message: "Product not found",
                };
            }

            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    static async updateStatusProduct(req, res, next) {
        try {
            const { id } = req.params;
            const { isActive } = req.body;

            const product = await Product.update(
                { isActive: isActive },
                {
                    where: { id },
                }
            );

            if (!product) {
                throw {
                    name: "PRODUCT_NOT_FOUND",
                    message: "Product not found",
                };
            }

            res.status(200).json({ message: "status has been updated" });
        } catch (error) {
            next(error);
        }
    }

    static async editProduct(req, res, next) {
        try {
            const { id } = req.params;
            const { name, qty, picture, expiredAt } = req.body;

            const product = await Product.update(
                { name, qty, picture, expiredAt },
                {
                    where: { id },
                }
            );

            if (!product) {
                throw {
                    name: "PRODUCT_NOT_FOUND",
                    message: "Product not found",
                };
            }

            res.status(200).json({ message: "product has been updated" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = Controller;
