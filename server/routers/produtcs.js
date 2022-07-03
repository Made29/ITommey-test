const express = require("express")
const router = express.Router()
const Controller = require("../controllers/products")

router.post("/product", Controller.addProduct)

router.get("/product", Controller.fetchAllProducts)

router.get("/product/:id", Controller.getOneProduct)

router.delete("/product/:id", Controller.updateStatusProduct)

router.put("/product/:id", Controller.editProduct)

module.exports = router