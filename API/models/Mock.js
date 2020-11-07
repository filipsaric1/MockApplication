const { Int32 } = require("mongodb")
const { Schema } = require("mongoose")

const mongoose = require("mongoose")
const schema = mongoose.Schema

const MockSchema = new Schema({
    HttpStatus: Number,
    ContentType: {type: String, default: "JSON"},
    Headers: JSON,
    Body: {type:JSON, required:false},
    CreatedAt: {type: Date, default: Date.now()},
    Name: {type: String, required:false},
    DeleteToken: {type: String, required: false}
})

module.exports = mongoose.model('Mock', MockSchema, "mocks_1")