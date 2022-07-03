const express = require("express")
const router = express.Router()
const products = require("./produtcs")

router.use(products)

module.exports = router