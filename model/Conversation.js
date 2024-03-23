const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new Schema(
    {
        recipents:[{
            type:Schema.Types.ObjectId,
            ref:'Users'
        }],
        lastMessage:{
            type : String 
        },
        date:{
            type: Date,
            default:Date.now() 
        }
    }
)

const Conversation = mongoose.model('conversattions', ConversationSchema);
module.exports=Conversation;