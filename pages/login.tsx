import Link from "next/link";
import React from "react";
import "../styles/globals.css";
import LogoImage from "../public/images/finterview-logo.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gray-100  ">
      {/* Left side */}
      <div
        className="w-7/12 text-white p-24 justify-center"
        style={{ backgroundColor: "#0C412E" }}
      >
        <div className="flex justify-content items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4" style={{ fontSize: 50 }}>
              Welcome to
            </h1>
            <h1
              className="text-4xl font-bold mb-4 mt-8"
              style={{ fontSize: 64 }}
            >
              Finterview
            </h1>
          </div>
          <Image src={LogoImage} alt="Finterview Logo" />
        </div>
        <button
          className="hover:text-green-700 text-white font-bold"
          style={{ fontSize: 20 }}
        >
          Join Now!
        </button>
      </div>

      {/* Right side */}
      <div className="w-5/12 bg-white">
        <div className="absolute top-8 w-1/3 flex gap-8 justify-end items-center">
          <h3 className="text-lg font-bold text-left">Sign in</h3>
          <button className="w-28 h-10 border rounded-2xl shadow-lg">
            Register
          </button>
        </div>
        <div className="flex h-full justify-center items-center">
          <div className="w-3/5 max-w-md">
            <h2 className="text-2xl font-bold text-left mb-8">Sign in</h2>

            <form>
              <div className="mb-6">
                <input
                  className="shadow-lg appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Enter Email or Username"
                />
              </div>
              <div className="mb-10 text-right">
                <input
                  className="shadow-lg appearance-none border rounded w-full h-12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <Link className=" text-sm hover:text-blue-800" href="/forgot">
                  Forgot Password?
                </Link>
              </div>
              <div className="items-center justify-between">
                <button
                  className="bg-custom-green hover:bg-green-700 h-12 text-white font-bold py-2 w-full rounded-lg focus:outline-none drop-shadow-md focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-8 mb-4 flex justify-center items-center gap-2">
                <HorizontalDivider />
                <div className="flex items-center justify-center py-4">
                  <span className="text-gray-600 text-center">
                    Or Continue With
                  </span>
                </div>
                <HorizontalDivider />
              </div>
              <GoogleButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const GoogleButton = () => {
  return (
    <button className="flex w-full h-12 justify-center items-center gap-5 rounded-lg bg-white py-2 px-4 text-sm font-bold drop-shadow-md hover:bg-gray-50">
      <GoogleLogo />
    </button>
  );
};

const GoogleLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 775 794"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M775 405.797C775 373.248 772.362 349.496 766.653 324.865H395.408V471.773H613.32C608.929 508.282 585.204 563.264 532.482 600.209L531.743 605.127L649.124 696.166L657.256 696.979C731.943 627.921 775 526.315 775 405.797"
      fill="#4285F4"
    />
    <path
      d="M395.408 792.866C502.167 792.866 591.792 757.676 657.256 696.979L532.482 600.209C499.093 623.521 454.279 639.796 395.408 639.796C290.845 639.796 202.099 570.741 170.463 475.294L165.826 475.688L43.772 570.256L42.1759 574.698C107.198 704.013 240.758 792.866 395.408 792.866Z"
      fill="#34A853"
    />
    <path
      d="M170.463 475.294C162.116 450.662 157.285 424.269 157.285 397C157.285 369.728 162.116 343.338 170.024 318.706L169.803 313.46L46.2193 217.373L42.1759 219.299C15.3772 272.961 0 333.222 0 397C0 460.778 15.3772 521.036 42.1759 574.698L170.463 475.294"
      fill="#FBBC05"
    />
    <path
      d="M395.408 154.201C469.656 154.201 519.74 186.31 548.298 213.143L659.891 104.059C591.356 40.2812 502.167 1.13428 395.408 1.13428C240.758 1.13428 107.198 89.9835 42.1759 219.299L170.024 318.706C202.099 223.259 290.845 154.201 395.408 154.201"
      fill="#EB4335"
    />
  </svg>
);

const HorizontalDivider = () => {
  return (
    <div
      className="w-1/3"
      style={{ borderColor: "#E7E7E7", borderWidth: 0.5 }}
    ></div>
  );
};
