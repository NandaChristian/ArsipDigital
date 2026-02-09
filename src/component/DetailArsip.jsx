import { Link, useParams } from "react-router-dom";
import React from "react";
import AdminLayout from "./layouts/AdminLayout";
import { PengajuanContext } from "../context/PengajuanContext";
import DataArsip from "./Petugas/DataArsip";

export default function DetailArsip() {
  // const { uuid } = useParams();
  const { arsips, handleEdit, handleDelete, role } =
    React.useContext(PengajuanContext);
  const [param, setParam] = React.useState("fisik");
  const arsipFisik = arsips?.filter((arsip) => arsip.file == null);
  const arsipDigital = arsips?.filter((arsip) => arsip.file != null);
  const filterArsip = param == "fisik" ? arsipFisik : arsipDigital;

  return (
    <DataArsip>
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="btn btn-white btn-sm my-3 mt-0 p-2 pe-0"
          data-bs-toggle="dropdown"
          data-display="static"
        >
          Semua Arsip
          <i className="bx bxs-chevron-down ms-5" />
        </a>
        <div className="customers-list mb-3">
          {filterArsip?.map((arsip) => (
            <div
              className="customers-list-item shadow cursor-pointer bg-white"
              style={{ marginBottom: 15 }}
            >
              {/* Header: Icon & Badges */}
              <div className="top d-flex align-items-center justify-content-between p-3">
                <div className="kiri">
                  <img
                    src="/assets/images/iconpdf.png"
                    width={60}
                    height={60}
                    alt="pdf-icon"
                  />
                </div>

                <div className="kanan d-flex gap-2">
                  {/* <div
                    className="d-flex align-items-center border px-2 radius-10 text-white"
                    style={{ height: 35, backgroundColor: "#386CFF" }}
                  >
                    <span className="me-2 mb-0">Lihat</span>
                    <img
                      src="/assets/images/eye.png"
                      width={15}
                      height={10}
                      alt="eye"
                    />
                  </div>

                  <div
                    className="d-flex align-items-center border px-2 radius-10 text-white"
                    style={{ height: 35, backgroundColor: "#386CFF" }}
                  >
                    <span className="me-2 mb-0">Unduh</span>
                    <img
                      src="/assets/images/download.png"
                      width={15}
                      height={15}
                      alt="download"
                    />
                  </div> */}

                  <div
                    className="d-flex align-items-center border px-2 radius-10 text-white"
                    style={{ height: 35, backgroundColor: "#46D657" }}
                  >
                    <span className="mb-0">Tersedia</span>
                  </div>
                </div>
              </div>

              {/* Judul */}
              <h6 className="ms-3 mb-0 fw-bold">{arsip.judul_arsip}</h6>

              {/* Detail Info */}
              <div className="d-flex justify-content-between p-3 py-2">
                <div className="info-kiri">
                  <div className="mb-1">
                    <span className="fw-bold">Jenis Arsip</span> :{" "}
                    <span className="text-secondary">{arsip.jenis_arsip}</span>
                  </div>
                  <div className="mb-1">
                    <span className="fw-bold">Kategori</span> :{" "}
                    <span className="text-secondary">
                      {arsip.kategori_arsip}
                    </span>
                  </div>
                  <div>
                    <span className="fw-bold">Tipe</span> :{" "}
                    <span className="text-secondary">{arsip.tipe_arsip}</span>
                  </div>
                </div>
                <div className="info-kanan">
                  <div className="mb-1">
                    <span className="fw-bold">Keterangan</span> :{" "}
                    <span className="text-secondary">File QC</span>
                  </div>
                  <div>
                    <span className="fw-bold">Waktu Upload</span> :{" "}
                    <span className="text-secondary">
                      17 Maret 2025 | 09:58
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Edit & Hapus */}
              {role == "petugas" && (
                <div className="d-flex p-3 pt-0 gap-3">
                  <button
                    onClick={() => handleEdit(arsip)}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modaltambahFisik"
                    className="btn btn-info text-white flex-grow-1 rounded"
                  >
                    Edit Arsip
                  </button>
                  <button
                    onClick={() => handleDelete(arsip)}
                    type="button"
                    className="btn btn-danger text-white flex-grow-1 rounded"
                  >
                    Hapus Arsip
                  </button>
                </div>
              )}
            </div>
          ))}

          <nav
            aria-label="Page navigation example"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript:;"
                  aria-label="Previous"
                >
                  {" "}
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:;">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:;">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:;">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:;" aria-label="Next">
                  {" "}
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </DataArsip>
  );
}
