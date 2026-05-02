"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaEnvelope, FaUser, FaShieldAlt, FaCamera } from "react-icons/fa";




const Page = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#FFF7E8] via-white to-[#FFE0B2]">
        <span className="loading loading-ring loading-xl text-[#FB8500]"></span>
      </div>
    );
  }

  if (!user) {
  return null;
}


  const handleUpdateProfile = async(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

     await authClient.updateUser({
        name,
        image
    })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#FFF7E8] via-white to-[#FFE0B2] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8">
        <div className="flex flex-col items-center">
          <div className="avatar mb-5">
            <div className="w-28 rounded-full ring-4 ring-[#FB8500] ring-offset-4 ring-offset-white shadow-xl overflow-hidden">
              <Image
                src={user?.image}
                alt="user image"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-[#0F172A] text-center">
            {user?.name}
          </h1>

          <p className="text-gray-500 mt-2 text-center">{user?.email}</p>

          <div className="mt-4 px-4 py-1 rounded-full bg-orange-100 text-[#FB8500] text-sm font-semibold flex items-center gap-2">
            <FaShieldAlt />
            Verified Account
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4 bg-[#FFF7E8] p-4 rounded-2xl">
            <div className="bg-[#FB8500] text-white p-3 rounded-xl">
              <FaUser />
            </div>

            <div>
              <p className="text-sm text-gray-500">Full Name</p>

              <h3 className="font-semibold text-[#0F172A]">{user?.name}</h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#FFF7E8] p-4 rounded-2xl">
            <div className="bg-[#FB8500] text-white p-3 rounded-xl">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>

              <h3 className="font-semibold text-[#0F172A] break-all">
                {user?.email}
              </h3>
            </div>
          </div>
        </div>

         <button
          onClick={() =>
            document.getElementById("update_modal").showModal()
          }
          className="w-full mt-8 bg-[#FB8500] hover:bg-[#ff9500] text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FaCamera />
          Update Profile
        </button>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Welcome to your SunCart profile
          </p>
        </div>

        {/* my modal */}

        <dialog id="update_modal" className="modal">
        <div className="modal-box rounded-3xl bg-white">
          <h3 className="text-2xl font-bold text-center text-[#FB8500]">
            Update Profile
          </h3>

          <form
            onSubmit={handleUpdateProfile}
            className="space-y-5 mt-6"
          >
            {/* Name */}
            <div>
              <label className="font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                name='name'
                
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="font-medium text-gray-700">
                Image URL
              </label>

              <input
                type="text"
                placeholder="Enter image URL"
                name='image'
              
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                  onClick={() =>
                  document.getElementById("update_modal").close()
                }
                className="flex-1 bg-[#FB8500] hover:bg-[#ff9500] text-white py-3 rounded-xl font-semibold transition-all"
              >
                Update Profile
              </button>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("update_modal").close()
                }
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
      </div>
    </div>
  );
};

export default Page;
