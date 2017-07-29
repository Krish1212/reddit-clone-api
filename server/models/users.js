import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minLength : [5, "Username should be minimum 5 characters"]
    },
    password : {
        type : String,
        required : true,
        minLength : [8, "Password should be minimum 8 characters"]
    },
    isDeleted : { type: Boolean, default: false},
    createdAt : { type: Date, default : Date.now}
});

//Write the encryption here
const User = mongoose.model('User', userSchema);
export default User;