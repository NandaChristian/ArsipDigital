import AdminLayout from "../layouts/AdminLayout";
import { usePengajuan } from "../../context/PengajuanContext";
import React, { useState, useEffect } from "react";

export default function Disposisi() {
  const { token, user } = usePengajuan();
  const [semuaDisposisi, setSemuaDisposisi] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getDisposisi() {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/disposisi`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Fetch Gagal");
      setSemuaDisposisi(result);
    } catch (error) {
      console.error("Error fetching disposisi:", error.message);
    } finally {
      setLoading(false);
    }
  }

  // Fungsi untuk update status "Diterima"
  async function handleTerimaSurat(item) {
    const form = { ...item, tanggal_direspon: new Date().toISOString() };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/disposisi/${item.uuid}`,
        {
          method: "PUT", // atau POST sesuai route backend Anda
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        },
      );
      if (response.ok) {
        getDisposisi(); // Refresh data
      }
    } catch (error) {
      alert("Gagal memperbarui status");
    }
  }

  const filterDisposisi = semuaDisposisi?.filter(
    (disposisi) => disposisi.user_id == user.uuid,
  );
  useEffect(() => {
    getDisposisi();
  }, [token]);

  // Helper untuk warna prioritas
  const getPrioClass = (prio) => {
    if (prio === "penting") return "bg-danger";
    if (prio === "segera") return "bg-warning text-dark";
    return "bg-info text-white";
  };
  const previewPDF = (base64String) => {
    const newTab = window.open();
    newTab.document.write(
      `<iframe src="${base64String}" width="100%" height="100%" style="border:none;"></iframe>`,
    );
  };
  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div
          className="page-content py-4"
          style={{ backgroundColor: "#f4f7fa", minHeight: "100vh" }}
        >
          <div className="row mb-4">
            <div className="col">
              <h4 className="fw-bold mb-1">Tugas Disposisi Saya</h4>
              <p className="text-muted small">
                Kelola instruksi pimpinan dan tindak lanjut surat.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center py-5">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
                <p className="mt-2 text-muted">Sinkronisasi data...</p>
              </div>
            ) : filterDisposisi?.length > 0 ? (
              filterDisposisi.map((item) => (
                <div className="col-12 col-xl-6" key={item.id}>
                  <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span
                          className={`badge rounded-pill ${getPrioClass(item.skala_prioritas)} px-3 py-2 text-capitalize`}
                        >
                          <i className="bx bxs-zap me-1"></i>{" "}
                          {item.skala_prioritas}
                        </span>
                        <div className="text-end text-muted small">
                          <i className="bx bx-calendar me-1"></i>
                          Deadline:{" "}
                          <span className="text-danger fw-bold">
                            {new Date(item.batas_waktu).toLocaleString("id-ID")}
                          </span>
                        </div>
                      </div>

                      {/* <h5 className="fw-bold text-dark mb-1">
                        Intruksi: {item.tindak_lanjut}
                      </h5> */}
                      <p className="text-muted small mb-3 border-bottom pb-3">
                        <i className="bx bx-envelope me-1"></i> Perihal:{" "}
                        <strong>{item?.surat?.perihal || "No Perihal"}</strong>
                      </p>

                      <div className="instruction-box bg-light p-3 rounded-3 mb-4 border-start border-primary border-3">
                        <small
                          className="text-primary fw-bold d-block mb-1 text-uppercase"
                          style={{ fontSize: "10px" }}
                        >
                          Instruksi Pimpinan:
                        </small>
                        <p className="mb-0 text-dark italic">
                          "{item.intruksi}"
                        </p>
                      </div>

                      <div className="d-flex align-items-center justify-content-between mt-auto">
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm bg-primary-subtle text-primary rounded-circle p-2 me-2">
                            <i className="bx bx-note fs-5"></i>
                          </div>
                          <span className="small text-muted">
                            <b> Catatan:</b>{" "}
                            {item.catatan || "Tidak ada catatan"}
                          </span>
                        </div>

                        {item.tanggal_direspon ? (
                          <a
                            onClick={() => previewPDF(item.surat.file_path)}
                            target="_blank"
                            className="btn btn-outline-primary rounded-pill px-4"
                          >
                            <i className="bx bx-show me-1"></i> Lihat Surat
                          </a>
                        ) : (
                          <button
                            onClick={() => handleTerimaSurat(item)}
                            className="btn btn-primary rounded-pill px-4 shadow-sm"
                          >
                            <i className="bx bx-check-double me-1"></i> Surat
                            Diterima
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="card border-0 shadow-sm rounded-4 py-5 text-center">
                  <i className="bx bx-archive fs-1 text-muted mb-3"></i>
                  <h6 className="text-muted">
                    Belum ada disposisi untuk Anda hari ini.
                  </h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
