import React, { useState } from "react";
import { Link } from "react-router-dom";

import Bgimg from "../assets/Logo/img-bg2.png";
import Logo from "../assets/Logo/Logo.png";

import { UserAuth } from "../context/AuthContext";

const ForgetPass = () => {
  const { resetPass } = UserAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPass(email);
      alert("Silahkan Cek Email Anda");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={Bgimg} alt="" />
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <img className="md:ml-[150px] mx-auto" src={Logo} alt="" />
          </div>
          {error ? <p className="mr-[20px] my-5 text-sm text-red-600">Masukan Email yang anda Daftarkan</p> : null}
          <form onSubmit={handleSubmit} className="max-w-[360px] md:max-w-[400px] w-full mx-auto bg-[#F6F6F6] p-8 px-8 rounded-lg shadow-xl">
            <h2 className="text-3xl text-black font-medium text-center">Reset Password</h2>
            <div className="flex flex-col py-2">
              <label className="after:content-['*'] after:text-red-500 after:ml-0.5">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} className="rounded-lg mt-2 p-2 border border-black text-black invalid:text-red-500 peer" type="email" placeholder="Tulis email anda..." />
              <p className="text-sm text-red-500 invisible peer-invalid:visible">Email tidak valid</p>
            </div>
            <p className="text-gray-300 before:content-['*'] before:text-red-500">Tulis email yang anda daftarkan</p>
            <div className="pt-[16px]">
              <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-1xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[295px] md:w-[337px] h-[50px] mb-4">Kirim Reset Password</button>
              <Link to="/">
                <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-1xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[295px] md:w-[337px] h-[50px] ">Masuk</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPass;
