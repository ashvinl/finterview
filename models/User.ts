import mongoose, { Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
    throw new Error("Missing env var from MongoDB");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

// update schema with attributes as deemed necessary
const userSchema = new Schema (
    {
        username: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;