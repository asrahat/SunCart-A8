"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);


    const router = useRouter();
  const searchParams = useSearchParams()

  const redirectPath = searchParams.get('redirect' || '/')

  const handleLoginFunc = async (data) => {
    // console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      toast.error(error.message);
      return
    }

    if (res) {
      toast.success("Signin successful");

      router.push(redirectPath)
    }
  };

 


  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
       callbackURL: redirectPath || "/",
    });
    // console.log(data, "data");
    toast.success(" Successfully Sign In with Google");
  };


 

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFF7E8] via-white to-[#FFE0B2] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#FF9F1C]">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">Login to continue shopping</p>
        </div>

        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="space-y-5 mt-8"
        >
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
                placeholder="Enter your password"
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

          <div className="text-right">
            <p className="text-sm text-[#FF9F1C] hover:underline">
              Forgot Password?
            </p>
          </div>

          <button className="w-full bg-[#0F172A] hover:bg-[#FF9F1C] text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#FF9F1C] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <div className="mt-5">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-[#FF9F1C] hover:bg-orange-50 text-gray-700 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>

                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>

                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>

                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>

                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>

            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
