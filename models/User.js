import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(

    {
        email : {
            type : String,
            unique : true,
            required : true
                               // unique means that no two users can have the same email address in the database. 1mail ekkin 1 user create karna hai
        },
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        isAdmin : {
            type : Boolean,
            default : false
        },
        isBlock : {
            type : Boolean,
            default : false
        },
        isemailVerified : {
            type : Boolean,
            default : false
        },
        image : {
            type : String,
            required : true,
            default : "/images/default-profile.png"

        }
    }


)

const User = mongoose.model("User" , UserSchema)
export default User