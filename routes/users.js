const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/rugs")
.then(function(){
    console.log("connected");
})

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    number : String,
    address : String
    
})

module.exports=mongoose.model("user",userSchema)
