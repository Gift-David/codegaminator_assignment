const express = require("express")
const carsCtrl = require("../controllers/carsCtrl")

const router = express.Router()

router.get("/allcars", carsCtrl.getAllCars)
router.post("/car", carsCtrl.postCar)

module.exports = router