import { Link, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import AdminLayout from "../layouts/AdminLayout";
import React from "react";
import { PengajuanContext } from "../../context/PengajuanContext";

export default function KodeArsipMaster() {
  const { codes, refreshData, token } = React.useContext(PengajuanContext)
  const [isEdit, setIsEdit] = React.useState(false);
  const [currentUuid, setCurrentUuid] = React.useState(null);
  const [kode, setKode] = React.useState({
    kode: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/kode/${currentUuid}`
        : `${import.meta.env.VITE_API_URL}/api/kode`;

      const method = isEdit ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(kode),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login Gagal');
      }
      setKode({ kode: "" });
      setIsEdit(false);
      setCurrentUuid(null);
      refreshData();
      const modalElement = document.getElementById('tambahKodeArsipMaster');
      const modal = window.bootstrap.Modal.getInstance(modalElement);
      modal.hide()
    } catch (error) {
      console.error('Login Gagal:', error.message);
    }
  };
  const handleEdit = (kodeItem) => {
    setIsEdit(true);
    setCurrentUuid(kodeItem.uuid);
    setKode({
      kode: kodeItem.kode
    });
  };
  const handleDelete = async (kodeItem) => {
    if (window.confirm("Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!")) {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/kode/' + kodeItem.uuid, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Login Gagal');
        }
        refreshData()
      } catch (error) {
        // 'error.message' akan berisi pesan dari 'throw new Error' di atas
        console.error('Login Gagal:', error.message);
      }
    }
  };
  return (
    <AdminLayout>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <div className="search-bar flex-grow-1 d-flex align-items-center" style={{ marginBottom: 10 }}>
                <h4 style={{ marginBottom: 0 }}>Data Master</h4>
              </div>
            </div>
          </div>
          <div className="row-cols-xl-2 d-flex flex-nowrap">
            <div className="col-12 col-lg-2" style={{ width: '22%', marginRight: '15px' }}>
              <div className="card">
                <div className="card-body-master">
                  <div className="col d-flex justify-content-center">
                    <button type="button" className="btn-tambah px-5 mt-2 mb-3" data-bs-toggle="modal" data-bs-target="#tambahKodeArsipMaster">Tambah <img src="/assets/images/plus.png" width={20} height={20} /></button>
                  </div>
                  <div>
                    <h6 className="my-2" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Kategori Data Master</h6>
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="customers-list mb-3" style={{ width: '78%' }}>
              {codes?.map((code) => (
                <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{ marginBottom: 15 }}>
                  <div className="kiri" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className>
                      <img src="/assets/images/iconpdf.png" width={50} height={50} alt />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{code.kode}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: 'flex' }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h7 className="mb-1">Aksi:</h7>
                      </div>
                      <div className="w-45">
                        <button type="button" onClick={() => handleEdit(code)}
                          data-bs-toggle="modal"
                          data-bs-target="#tambahKodeArsipMaster"
                          className="btn-edit pt-1 pb-1" style={{ width: '100%' }}><img src="/assets/images/edit.png" alt width="15px" height="15px" style={{ marginRight: 8 }} />Edit</button>
                      </div>
                      <div className="w-45">
                        <button type="button" className="btn-hapus pt-1 pb-1" onClick={() => handleDelete(code)} style={{ width: '100%' }}><img src="/assets/images/hapus.png" width="15px" height="15px" style={{ marginRight: 8 }} alt />Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Tambah User */}
          <div className="modal fade" id="tambahKodeArsipMaster" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: 'none' }}>
                  <div className style={{ margin: 'auto' }}>
                    <h5 className="modal-title align-items-center">Penambahan Kode Arsip</h5>
                  </div>
                  <div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                </div>
                <div className="modal-body">
                  <img src="/assets/images/documents.png" alt width="90px" height="90px" style={{ display: 'block', margin: '0 auto', marginBottom: 20 }} />
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Kode Arsip</label>
                      <input type="text" name="kode" value={kode.kode} onChange={(e) => setKode({ kode: e.target.value })} className="form-control radius-30" placeholder="Masukkan Kode Arsip" />
                    </div>
                    <div className="p-3 pt-0">
                      <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                        <div className="w-50">
                          <button type="button" className="btn-batal" style={{ width: '100%' }}>Batal</button>
                        </div>
                        <div className="w-50">
                          <button type="submit" className="btn-tambah" style={{ width: '100%' }}>Simpan</button>
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
  )
}