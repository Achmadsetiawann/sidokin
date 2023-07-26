import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ojuagddmfcaffmqmgkmd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qdWFnZGRtZmNhZmZtcW1na21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NzE2NTIsImV4cCI6MjAwNTQ0NzY1Mn0.DgfigyDBEEAM-1kZy5ukM_rao42OHhAbbgcjJA7EThY");

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomeDashboardComponents() {

  const [Sidokin, setSidokin] = useState([]);

  useEffect(() => {
    getSidokin();
  }, []);

  async function getSidokin() {
    const { data, error } = await supabase.from("Sidokin").select();
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setSidokin(data);
    }
  }

  return (
    <div className="isolate bg-white h-screen px-2 py-4 sm:py-2 lg:px-2">
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Nomor Document</th>
              <th className="px-4 py-2">Judul Kegiatan</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Pelaksana</th>
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {Sidokin.map((sidokins, index) => (
              <tr key={sidokins.id_doc} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border px-4 py-2">{sidokins.id_doc}</td>
                <td className="border px-4 py-2">{sidokins.judulkegiatan}</td>
                <td className="border px-4 py-2">{sidokins.namapengajukegiatan}</td>
                <td className="border px-4 py-2">{sidokins.pelaksanakegiatan}</td>
                <td className="border px-4 py-2">{sidokins.tanggalkegiatan}</td>
                <td className="border px-4 py-2">{sidokins.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
