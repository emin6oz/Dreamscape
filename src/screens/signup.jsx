import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col px-4 py-6">
      <button className="text-lg mb-4">{`←`}</button>

      <h1 className="text-2xl font-bold text-[#0C0F2E]">Sign up</h1>
      <p className="text-sm text-gray-500 mb-6">Create an account to continue!</p>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Lois Becket"
            className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Loisbecket@gmail.com"
            className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Birth of date</label>
          <input
            type="date"
            className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="(454) 726-0592"
            className="w-full mt-1 p-3 rounded-lg border border-gray-200 bg-white text-sm"
          />
        </div>
        <div className="relative">
          <label className="text-sm font-medium text-gray-700">Set Password</label>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="******"
            className="w-full mt-1 p-3 pr-10 rounded-lg border border-gray-200 bg-white text-sm"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute top-9 right-3 text-gray-400"
          >
            {passwordVisible ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0C0F2E] text-white py-3 rounded-lg text-base font-semibold mt-4"
        >
          Register
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-black">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
