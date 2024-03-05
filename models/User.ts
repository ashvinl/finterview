import mongoose, { Schema } from "mongoose";
import { exit } from "process";

if (!process.env.MONGODB_URI) {
    exit(1);
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

// update schema with attributes as deemed necessary
const userSchema = new Schema (
    {
        email: String,
        //username: String,
        password: String,
        // firstName: String,
        // lastName; String
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;