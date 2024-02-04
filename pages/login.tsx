import Link from "next/link";
import React from 'react';

// pages/index.js or pages/your-page.js

export default function LoginPage() {
    return (
      <div className="flex h-screen bg-gray-100  ">
        {/* Left side */}
        <div className="w-1/2 text-white p-10 justify-center" style={{ backgroundColor: "#1D402F" }}>

          <h1 className="text-4xl font-bold mb-4">Welcome to Finterview</h1>
          <img src="/public/images/Finterview logo 300x300.png" alt="Finterview Logo" />
          <p className="mb-8">
            Finterview is an AI-powered video interview platform tailored towards aspiring finance professionals.
            Through progress tracking and instant feedback on first-rate simulated interviews, students get the
            assistance they need to break into the high finance world.
          </p>
          <button className="hover:text-green-700 text-white font-bold py-2">
            Join Now!
          </button>
        </div>
  
        {/* Right side */}
        <div className="w-1/2 flex justify-center items-center bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-left mb-6">Sign in</h2>
            
              <form>
                <div className="mb-4">
                  
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter Email or Username"
                  />
                </div>
                <div className="mb-4">
                  
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                  />
                  <p className="text-right text-sm text-blue-500 hover:text-blue-800">
                    Forgot Password?
                  </p>
                </div>
                <div className="items-center justify-between">
                  <button
                    className="bg-custom-green hover:bg-green-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-gray-600 mr-2">Or Continue with</span>
                  <button
                    className="border rounded-full p-2 shadow"
                    type="button"
                  >
                    G
                  </button>
                </div>
              </form>
            
          </div>
        </div>
      </div>
    );
  }
  
