const mongoose = require('mongoose');
//czy jakos lepiej sie tego nie da zrobic
const formsSchema = new mongoose.Schema({
    name:String,
    subject:String,
    prize:Number,
    maxMember:Number,
    description:String,
    members:Array
});

const finalFormSchema = new mongoose({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    form: [formsSchema]
});
mongoose.model('Track', finalFormSchema);
