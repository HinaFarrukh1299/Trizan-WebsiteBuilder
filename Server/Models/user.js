const {mongoose} = require('mongoose');
const{Schema} = mongoose ;

const userSchema = new Schema ({

name:{
    type:String,
    required:true
},
email:{
    type : String,
    unique : true,
    required : true
},
password:{
    type : String ,
    required :true

}
});

const userModel = mongoose.model("User",userSchema);// here we are definining that the userSchema will be in the user collection

module.exports = userModel ;
