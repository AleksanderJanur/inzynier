const mongoose = require('mongoose');
const formsSchema = new mongoose.Schema({
    name:String,
    subject:String,
    prize:Number,
    maxMember:Number,
    description:String,
    educationLevel:String,
    members:Array
});

const finalFormSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    form: [formsSchema]
});
mongoose.model('Form', finalFormSchema);

