import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PengajuanContext } from "../../context/PengajuanContext";
import Sidebar from "../Sidebar";
import AdminLayout from "../layouts/AdminLayout";

export default function LantaiMaster() {
  const [floor, setFloor] = useState({
    building_uuid: "",
    name: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [currentUuid, setCurrentUuid] = useState(null);
  const { token, gedungs, floors, getFloors } =
    React.useContext(PengajuanContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/floors/${currentUuid}`
        : `${import.meta.env.VITE_API_URL}/api/floors`;

      const method = isEdit ? "PUT" : "POST";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(floor),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login Gagal");
      }
      setFloor({ building_uuid: "", name: "" });
      setIsEdit(false);
      setCurrentUuid(null);
      getFloors(token);
      const modalElement = document.getElementById("tambahLantaiMaster");
      const modal = window.bootstrap.Modal.getInstance(modalElement);
      modal.hide();
    } catch (error) {
      // 'error.message' akan berisi pesan dari 'throw new Error' di atas
      console.error("Login Gagal:", error.message);
    }
  };
  const handleEdit = (floorItem) => {
    setIsEdit(true);
    setCurrentUuid(floorItem.uuid);

    const bUuid = floorItem.building_uuid || "";
    setFloor({
      building_uuid: bUuid,
      name: floorItem.name, // Pastikan property 'name' ada di folderItem
    });
  };
  const handleDelete = async (currentFloor) => {
    if (
      window.confirm(
        "Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!",
      )
    ) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/floors/" + currentFloor.uuid,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Login Gagal");
        }
        getFloors(token);
      } catch (error) {
        // 'error.message' akan berisi pesan dari 'throw new Error' di atas
        console.error("Login Gagal:", error.message);
      }
    }
  };

  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <div
                className="search-bar flex-grow-1 d-flex align-items-center"
                style={{ marginBottom: 10 }}
              >
                <h4 style={{ marginBottom: 0 }}>Data Master</h4>
              </div>
            </div>
          </div>
          <div className="row-cols-xl-2 d-flex flex-nowrap">
            <div
              className="col-12 col-lg-2"
              style={{ width: "22%", marginRight: "15px" }}
            >
              <div className="card">
                <div className="card-body-master">
                  <div className="col d-flex justify-content-center">
                    <button
                      onClick={() => {
                        setIsEdit(false);
                        setFloor({ building_uuid: "", name: "" });
                      }}
                      type="button"
                      className="btn-tambah px-5 mt-2 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahLantaiMaster"
                    >
                      Tambah +
                    </button>
                  </div>
                  <div>
                    <h6
                      className="my-2"
                      style={{ textAlign: "center", whiteSpace: "nowrap" }}
                    >
                      Kategori Data Master
                    </h6>
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="customers-list mb-3" style={{ width: "78%" }}>
              {floors?.map((floor) => (
                <div
                  key={floor.uuid}
                  className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10"
                  style={{ marginBottom: 15 }}
                >
                  <div
                    className="kiri"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className>
                      <img
                        src="/assets/images/block.png"
                        width={40}
                        height={50}
                        alt
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{floor.name}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: "flex" }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h6 className="mb-1">Aksi:</h6>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleEdit(floor)}
                          type="button"
                          className="btn-edit pt-1 pb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#tambahLantaiMaster"
                          style={{ width: "100%" }}
                        >
                          <img
                            src="/assets/images/edit.png"
                            alt=""
                            width="15px"
                            height="15px"
                            style={{ marginRight: 8 }}
                          />
                          Edit
                        </button>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleDelete(floor)}
                          type="submit"
                          className="btn-hapus pt-1 pb-1"
                          style={{ width: "100%" }}
                        >
                          <img
                            src="/assets/images/hapus.png"
                            width="15px"
                            height="15px"
                            style={{ marginRight: 8 }}
                            alt
                          />
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Tambah User */}
          <div
            className="modal fade"
            id="tambahLantaiMaster"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: "none" }}>
                  <div className style={{ margin: "auto" }}>
                    <h5 className="modal-title align-items-center">
                      Penambahan Lantai
                    </h5>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                </div>
                <div className="modal-body">
                  <img
                    src="/assets/images/documents.png"
                    alt
                    width="90px"
                    height="90px"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      marginBottom: 20,
                    }}
                  />
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <div className="mb-4">
                        <label className="form-label">Pilih Gedung</label>
                        <select
                          name="building_uuid"
                          required
                          value={floor.building_uuid}
                          onChange={(e) =>
                            setFloor({
                              ...floor,
                              building_uuid: e.target.value,
                            })
                          }
                          id=""
                        >
                          <option value="">Pilih Gedung</option>
                          {gedungs?.map((gedung) => (
                            <option key={gedung.uuid} value={gedung.uuid}>
                              {gedung.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <label className="form-label">Lantai</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={floor.name}
                        onChange={(e) =>
                          setFloor({ ...floor, name: e.target.value })
                        }
                        className="form-control radius-30"
                        placeholder="Masukkan Lantai"
                      />
                      <div className="p-3 pt-0">
                        <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                          <div className="w-50">
                            <button
                              type="button"
                              className="btn-batal"
                              style={{ width: "100%" }}
                            >
                              Batal
                            </button>
                          </div>
                          <div className="w-50">
                            <input
                              type="submit"
                              className="btn-tambah"
                              style={{ width: "100%" }}
                              value={"Simpan"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
