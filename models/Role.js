const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    uuid:{
        type: String,
        unique: true
    },
    name: {
        type: String
    }
})

const Role = mongoose.model('role', roleSchema);

module.exports = Role;