const Cars = require("../models/carsModels")

const carsCtrl = {
        getAllCars: (req, res)=>{
        res.json({msg: "to get all products"})
    },

    postCar: async(req, res)=>{
        const {name, price} =req.body

        const newCar = new Car({name, price})

        await newCar.save()

        res.json({msg: "product aved successfully"})
    }
}

module.exports = carsCtrl