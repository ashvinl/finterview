import mongoose, { Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
    console.error("Missing env var from MongoDB");
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