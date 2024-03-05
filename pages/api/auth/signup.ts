import User from "@/models/User";
import { NextResponse } from "next/server";

export default async function signUpHandler(req, res) {
    if (req.method === "POST") {
        try {
            const { email, password } = req.body;

            // Check if the username already exists
            const existingUser = await User.findOne({ email });

            if (existingUser) {
                // Username already taken, return an error
                res.status(400).json({ message: "a user with this email address already exists" });
            } else {
                // Perform user creation logic if the username is not taken
                await User.create({ email, password });
                res.status(201).json({ message: "User Created" });
            }
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ message: error });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}