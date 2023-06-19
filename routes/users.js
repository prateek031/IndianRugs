const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://somshmishra97551162821:MwQBTBtm13Qbz9ll@cluster0.bqgcvli.mongodb.net/?retryWrites=true&w=majority")
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
