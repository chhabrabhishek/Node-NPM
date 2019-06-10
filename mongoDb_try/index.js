const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/playground", {useNewUrlParser : true})
    .then(() => console.log("Connected to mongoDb ..."))
    .catch(err => console.log("Can't connect to database",err));

const trySchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [String],
    date : {type : Date, default : Date.now},
    isPublished : Boolean
});

const Try = mongoose.model('Try', trySchema);
const tries = new Try({
    name : "Zero to One",
    author : "Paypal Investor",
    tags : ['zero', 'one'],
    isPublished : true
});

async function createTry(){
    const result = await tries.save();
    console.log(result);
}
createTry();