import User from "@/models/User";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        console.log(req.body);
        const { username, password } = req.body;
  
        // Perform user creation logic (replace this with your actual logic)
        await User.create({ username, password });
  
        res.status(201).json({ message: "User Created" });
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }