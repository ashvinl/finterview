import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") { // Assuming login is done through a POST request
        try {
            const { email, password } = req.body;

            // Check if the username exists in the database
            const existingUser = await User.findOne({ email, password });

            // If user is found and the password matches, consider it a successful login
            if (existingUser) {
                res.status(200).json({ message: "Login Successful" });
            } else {
                res.status(401).json({ message: "Username or Password Incorrect" });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}