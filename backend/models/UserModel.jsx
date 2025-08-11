import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"ashish sharma"],
      },
  email: {
    type: String,
    required: [true,"ashishsharma04337@gmail.com"],
    unique: true,
  },
  password: {
    type: String,
    required: [true,"A1s2h3i4s5h6@"],
  },
  isAdmin:{
    type: Boolean,
    default: false,

  }
},
  {timestamps:true}
);


 
// password hashing
userSchema.pre('save ', async function (next) {
    if(!
        this.isModified('password') ) return
        next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        
        next();
});

userSchema.method.matchPassword = 
async function (enteredPassword){
    return await
    bcrypt.compare(enteredPassword,
        this.password
    );
};
    


const User = mongoose.model("User", userSchema);

export default User;
