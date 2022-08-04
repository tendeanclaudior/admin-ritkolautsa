import React from "react";

import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { Logout } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await Logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h2 className="text-2xl md:text-4xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r  from-[#165E00] via-[#FFDD00] to-[#FF0000] animate-pulse">RITKOLA-UTSA</h2>

      <button onClick={handleSubmit} className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white px-6 py-2 rounded cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
