const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GlobalMessageSchema = new Schema(
    {
        from:{
            require:true,
            type:Schema.Types.ObjectId,
            ref:'users'
        },
        body:{
            type:String
        },
        date:{
            type:String,
            default:Date.now()
        },
    }
)

const GlobalMessage = mongoose.model('global_messages',GlobalMessageSchema);
module.exports = GlobalMessage;