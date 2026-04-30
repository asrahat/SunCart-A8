"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaImage,
  FaLock,
} from "react-icons/fa";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFF7E8] via-white to-[#FFE0B2] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#FF9F1C]">SunCart</h1>

          <p className="text-gray-500 mt-2">
            Create your summer shopping account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
          className="space-y-5 mt-8"
        >
          <div>
            <label className="font-medium text-gray-700">Full Name</label>

            <div className="relative mt-2">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="font-medium text-gray-700">Photo URL</label>

            <div className="relative mt-2">
              <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Enter photo URL"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
                {...register("photo", {
                  required: "Photo URL is required",
                })}
              />
            </div>

            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium text-gray-700">Email Address</label>

            <div className="relative mt-2">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium text-gray-700">Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={isShowPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <span
                onClick={() => setIsShowPassword(!isShowPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {isShowPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button className="w-full bg-[#FF9F1C] hover:bg-[#FB8500] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#FF9F1C] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
