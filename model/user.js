const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema(
    {
        name: {
            require: true,
            type: String,
        },
        userName: {
            require: true,
            type: String,
            unique: true
        },
        password: {
            require: true,
            type: String,
        },
        date: {
            type: String,
            default: Date.now()
        },
    }
)


const Users = mongoose.model('users',UsersSchema);
module.exports = Users