import Sidebar from "../Sidebar";
import { PengajuanContext } from "../../context/PengajuanContext";
import Navigation from "../Navigation";
import React from "react";
import AdminLayout from "../layouts/AdminLayout";

export default function NamaMaster() {
  const { names, refreshData, token } = React.useContext(PengajuanContext);
  const [isEdit, setIsEdit] = React.useState(false);
  const [currentUuid, setCurrentUuid] = React.useState(null);
  const [name, setName] = React.useState({
    name: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/names/${currentUuid}`
        : `${import.meta.env.VITE_API_URL}/api/names`;

      const method = isEdit ? "PUT" : "POST";
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(name),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login Gagal");
      }
      setName({ name: "" });
      setIsEdit(false);
      setCurrentUuid(null);
      refreshData();
      const modalElement = document.getElementById("tambahNamaMaster");
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalElement);
      modal.hide();
    } catch (error) {
      console.error("Login Gagal:", error.message);
    }
  };
  const openModal = () => {
    const modalEl = document.getElementById("tambahNamaMaster");
    const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  };

  const closeModal = () => {
    const modalEl = document.getElementById("tambahNamaMaster");
    const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.hide();
  };

  const handleEdit = (nameItem) => {
    setIsEdit(true);
    setCurrentUuid(nameItem.uuid);
    setName({
      name: nameItem.name,
    });
  };
  const handleDelete = async (nameItem) => {
    if (
      window.confirm(
        "Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!",
      )
    ) {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/names/" + nameItem.uuid,
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
        refreshData();
      } catch (error) {
        // 'error.message' akan berisi pesan dari 'throw new Error' di atas
        console.error("Login Gagal:", error.message);
      }
    }
  };
  React.useEffect(() => {
    const modalEl = document.getElementById("tambahNamaMaster");
    if (!modalEl) return;

    const handler = () => {
      document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("padding-right");
    };

    modalEl.addEventListener("hidden.bs.modal", handler);

    return () => {
      modalEl.removeEventListener("hidden.bs.modal", handler);
    };
  }, []);

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
                        setName({ name: "" });
                        openModal();
                      }}
                      type="button"
                      className="btn-tambah px-5 mt-2 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahNamaMaster"
                    >
                      Tambah +
                    </button>
                  </div>
                  <div>
                    <h6
                      className="my-2"
                      style={{ textAlign: "center", whiteSpace: "nowrap" }}
                    >
                      Nama Data Master
                    </h6>
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="customers-list mb-3" style={{ width: "78%" }}>
              {names?.map((item) => (
                <div
                  key={item.uuid}
                  className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10"
                  style={{ marginBottom: 15 }}
                >
                  <div
                    className="kiri"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div className>
                      <img
                        src="assets/images/stackfiles.png"
                        width={60}
                        height={50}
                        alt
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{item.name}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: "flex" }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h7 className="mb-1">Aksi:</h7>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleEdit(item)}
                          type="button"
                          className="btn-edit pt-1 pb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#tambahNamaMaster"
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
                          onClick={() => handleDelete(item)}
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
            id="tambahNamaMaster"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: "none" }}>
                  <div className style={{ margin: "auto" }}>
                    <h5 className="modal-title align-items-center">
                      Penambahan Nama Arsip
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
                    src="assets/images/documents.png"
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
                      <label className="form-label">Nama Arsip</label>
                      <input
                        type="text"
                        value={name.name}
                        onChange={(e) => setName({ name: e.target.value })}
                        name="name"
                        className="form-control radius-30"
                        placeholder="Masukkan Nama Arsip"
                      />
                    </div>
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
                        <button
                          type="submit"
                          className="btn-tambah"
                          style={{ width: "100%" }}
                        >
                          Simpan
                        </button>
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
