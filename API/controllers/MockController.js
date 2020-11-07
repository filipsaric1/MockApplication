const MockModel = require("../models/Mock");
const express = require("express");
const Mock = require("../models/Mock");
const { json } = require("express");
const router = express.Router()

randomToken = () => {
    return Math.random().toString(36).substr(2); //substr to remove '0.'
}

//POST
router.post('/', async (req, res) => {
    let mock =  new MockModel({
        HttpStatus: req.body.HttpStatus,
        ContentType: req.body.ContentType,
        Headers: req.body.Headers,
        Body: req.body.Body,
        DeleteToken: req.body.DeleteToken ? req.body.DeleteToken : randomToken() + randomToken(),
        Name: req.body.Name
    })
    try {
        const newMock = await mock.save()
        res.status(201).json(newMock)
    }
    catch(err) {
        res.status(400).json({message: err.message})
    }
    
})
//GET
/*
router.get('/', async (req, res) => {
    try {
        const mocks = await MockModel.find()
        res.json(mocks)
    }
    catch (err) {
        res.status(500).json({message: err.message})

    }
})
*/
router.get('/obj/:id', async (req, res) => {
    try {
        const mock = await MockModel.findById(req.params.id)
        if (mock != null)
            res.json(mock);
        else
            res.status(404).json();
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.get('/example', async (req, res) => {
    try {
        res.status(200).json({"title": "This is example data from JSON mock webapp"})
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})
router.get('/:id', async (req, res) => {
    try {
        const mock = await MockModel.findById(req.params.id)
        if (mock != null)
            res.header(mock.Headers != "" ? JSON.parse(mock.Headers): JSON.parse("{}")).status(mock.HttpStatus).json(mock.Body != "" ? JSON.parse(mock.Body): JSON.parse("{}"));
        else
            res.status(404).json();
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})
router.put('/:id', async (req, res) =>{
    try {
        await MockModel.findById(req.params.id, (err, mock) => {
            mock.Body = req.body.Body
            mock.Header = req.body.Header
            mock.Name = req.body.Name
            mock.DeleteToken = req.body.DeleteToken
            mock.HttpStatus = req.body.HttpStatus
            mock.save()
            res.json(mock)
        })

    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})
//DELETE MOCK BUT WITH GET REQUEST - DELETE TOKEN CHECK REQUIRED BEFORE DELETING
router.get('/:id/delete/:token', async (req, res) => {
    try {
        const mock = await MockModel.findById(req.params.id)
        const tokenProvided = req.params.token
        if (mock.DeleteToken === tokenProvided) {
            mock.remove()
            res.status(200).json({message: "Mock successfully deleted!"})
        }
        else 
            res.status(401).json({message: "Wrong token provided! Mock not deleted"})
    }
    catch (err) {
        res.json({message: err.message})
    }
})
  



module.exports = router

