import React, { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";

import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const Home = () => {
  const [data, setData] = useState({
    tableData: [],
  });

  const [jumlah, setJumlah] = useState(0);
  const [kehadiran, setKehadiran] = useState(0);
  let count = 0;

  const getValues = () => {
    const dbRef = ref(db, "users");

    onValue(dbRef, (snapshot) => {
      let records = [];
      let kehadiran = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let isData = childSnapshot.val();
        records.push({ key: keyName, data: isData });
        kehadiran.push({ key: keyName, data: isData });
      });
      setData({ tableData: records });
      setJumlah(records.length);
    });
  };

  {
    data.tableData.map((item) => {
      if (item.data.i_absensi === "hadir") {
        count++;
      }
    });
  }
  const refresh = () => {
    setKehadiran(count);
  };

  useEffect(() => {
    getValues();
    refresh();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="flex relative justify-center px-2 pt-40 sm:pt-40 text-black">
          <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[1242px]">
            <div className="text-center">
              <h1 className="font-bold text-2xl my-6">Event Ritkola Utsa</h1>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[500px] h-[220px] mx-auto mt-[70px] pt-3">
          <h1 className="text-2xl text-center">Jumlah Pendaftar</h1>
          <p className="text-4xl text-center text-red-600">{jumlah}</p>
          <h1 className="text-2xl text-center">Jumlah yang Hadir</h1>
          <p className="text-4xl text-center text-red-600">{kehadiran}</p>
          <div className="flex mt-2">
            <button className="bg-red-600 p-2 rounded-lg hover:bg-red-500 mx-auto" onClick={refresh}>
              Hitung
            </button>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-2 pt-20">
        <table className="bg-white rounded-xl shadow-2xl w-[1242px]">
          <thead className="text-black">
            <tr>
              <th className="py-3 bg-red-600 text-2xl border-r-2 border-gray-300 rounded-tl-lg">No</th>
              <th className="py-3 bg-red-600 text-2xl">Foto</th>
              <th className="py-3 bg-red-600 text-2xl">Nama</th>
              <th className="py-3 bg-red-600 text-2xl">No. WA</th>
              <th className="py-3 bg-red-600 text-2xl">Medsos</th>
              <th className="py-3 bg-red-600 text-2xl">Asal Kota</th>
              <th className="py-3 bg-red-600 text-2xl rounded-tr-lg">Kehadiran</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            {data.tableData.map((item, index) => {
              return (
                <tr key={item} className="bg-white cursor-pointer border-b-2 border-gray-300">
                  <td className="py-3 px-6 border-r-2">{index + 1}</td>
                  <td className="py-3 px-6">
                    <img className="w-[50px] h-[50px] mx-auto rounded-full hover:scale-150" src={item.data.j_foto} alt="/" />
                  </td>
                  <td className="py-3 px-6">{item.data.a_nama}</td>
                  <td className="py-3 px-6">{item.data.b_nomor_WA}</td>
                  <td className="py-3 px-6">{item.data.c_medsos}</td>
                  <td className="py-3 px-6">{item.data.d_kota}</td>
                  <td className="py-3 px-6">{item.data.i_absensi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mb-[90px]"></div>
    </>
  );
};

export default Home;
