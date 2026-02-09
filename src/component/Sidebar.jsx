import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menus = [
    {
      name: "Instansi",
      path: "/instansi",
    },
    {
      name: "Nama",
      path: "/dataMaster/nama",
    },
    {
      name: "Tipe",
      path: "/dataMaster/main",
    },
    {
      name: "Jenis",
      path: "/dataMaster/jenis",
    },
    {
      name: "Kategori",
      path: "/dataMaster/KategoriMaster",
    },
    {
      name: "Gedung",
      path: "/dataMaster/GedungMaster",
    },
    {
      name: "Lantai",
      path: "/dataMaster/LantaiMaster",
    },
    {
      name: "Ruang",
      path: "/dataMaster/RuangMaster",
    },
    {
      name: "Lemari",
      path: "/dataMaster/LemariMaster",
    },
    {
      name: "Rak",
      path: "/dataMaster/RakMaster",
    },
    {
      name: "Folder",
      path: "/dataMaster/FolderMaster",
    },
    {
      name: "Tujuan",
      path: "/dataMaster/TujuanMaster",
    },
    {
      name: "Kode Arsip",
      path: "/dataMaster/KodeArsipMaster",
    },
  ];

  return (
    <div className="fm-menu mt-3">
      <div className="list-group list-group-flush">
        {menus?.map((menu) => (
          <div
            onClick={() => navigate(menu.path)}
            className={`list-group-item py-2 ${location.pathname.includes(menu.path) ? "active" : ""}`}
            role="presentation"
          >
            <span>{menu.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
