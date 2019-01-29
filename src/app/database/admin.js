var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var userSchema= new Schema({
    firstname: {type:String, required:true},
    lastname:{type:String,required:true},
    email:{type:String,unique:true},
    password:{type:String,required:true},
    mobile:{type:Number,unique:true,required:true, minlength:10, maxlength:10,required:true},
    token:{type:String, default:"empty"}
});




// userSchema.pre('save',function(next){
//     var user=this;
//     if(user.isModified('password')){
//         bcrypt.genSalt(7,(err,salt)=>{
//             bcrypt.hash(user.password,salt,(err,hash)=>{
//                 user.password=hash;
//                 next();
//             });
//         });
//     }else{
//         next();
//     }      
// });

var admin = mongoose.model('admin',userSchema);
module.exports={admin};