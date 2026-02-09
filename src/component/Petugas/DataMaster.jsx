import Sidebar from "../Sidebar";
import { PengajuanContext } from "../../context/PengajuanContext";
import Navigation from "../Navigation";
import React from "react";

export default function DataMaster() {
  const { types, refreshData, token } = React.useContext(PengajuanContext)
  const [isEdit, setIsEdit] = React.useState(false);
  const [currentUuid, setCurrentUuid] = React.useState(null);
  const [type, setType] = React.useState({
    name: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEdit
        ? `${import.meta.env.VITE_API_URL}/api/tipe/${currentUuid}`
        : `${import.meta.env.VITE_API_URL}/api/tipe`;

      const method = isEdit ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(type),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login Gagal');
      }
      setType({ name: "" });
      setIsEdit(false);
      setCurrentUuid(null);
      refreshData();
      const modalElement = document.getElementById('tambahTipeMaster');
      const modal = window.bootstrap.Modal.getInstance(modalElement);

      modal.hide()
    } catch (error) {
      console.error('Login Gagal:', error.message);
    }
  };
  const handleEdit = (typeItem) => {
    setIsEdit(true);
    setCurrentUuid(typeItem.uuid);
    setType({
      name: typeItem.name
    });
  };
  const handleDelete = async (currentType) => {
    if (window.confirm("Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!")) {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/tipe/' + currentType.uuid, {
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
    <div className="wrapper">
      {/*sidebar wrapper */}
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header" style={{ border: 'none', justifyContent: 'center' }}>
          <div className>
            <h4 className="logo-text" style={{ fontWeight: 600, fontSize: 20, marginLeft: 0 }}>Arsip Digital Bank</h4>
          </div>
        </div>
        {/*navigation*/}
        <Navigation />
        {/*end navigation*/}
      </div>
      {/*end sidebar wrapper */}
      {/*start header */}
      <header>
        <div className="topbar d-flex align-items-center">
          <nav className="navbar navbar-expand">
            <div className="mobile-toggle-menu"><i className="bx bx-menu" />
            </div>
            <div className="search-bar flex-grow-1">
              <h4 className="mb-0">Selamat Datang</h4>
            </div>
            <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item dropdown dropdown-large">
                  <div className="nav-link position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/images/bell-dot.png" width="25px" height="25px" alt />
                  </div>
                </li>
              </ul>
            </div>
            <div className="user-box" style={{ border: 'none' }}>
              <div className="col">
                <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-30">
                  <img src="assets/images/Avatar.png" alt style={{ marginRight: 10 }} />
                  Petugas
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*end header */}
      {/*start page wrapper */}
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
                    <button
                      onClick={() => {
                        setIsEdit(false);
                        setType({ name: "" });
                      }}
                      type="button"
                      className="btn-tambah px-5 mt-2 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahTipeMaster"
                    >
                      Tambah +
                    </button>
                  </div>
                  <div>
                    <h6 className="my-2" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>Kategori Data Master</h6>
                  </div>
                  <Sidebar />
                </div>
              </div>
            </div>
            <div className="customers-list mb-3" style={{ width: '78%' }}>
              {types?.map((type) => (
                <div key={type.uuid} className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{ marginBottom: 15 }}>
                  <div className="kiri" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className>
                      <img src="assets/images/stackfiles.png" width={60} height={50} alt />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{type.name}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: 'flex' }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h7 className="mb-1">Aksi:</h7>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleEdit(type)}
                          type="button"
                          className="btn-edit pt-1 pb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#tambahTipeMaster"
                          style={{ width: '100%' }}
                        >
                          <img src="/assets/images/edit.png" alt="" width="15px" height="15px" style={{ marginRight: 8 }} />
                          Edit
                        </button>
                      </div>
                      <div className="w-45">
                        <button onClick={() => handleDelete(type)} type="submit" className="btn-hapus pt-1 pb-1" style={{ width: '100%' }}><img src="/assets/images/hapus.png" width="15px" height="15px" style={{ marginRight: 8 }} alt />Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Modal Tambah User */}
          <div className="modal fade" id="tambahTipeMaster" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: 'none' }}>
                  <div className style={{ margin: 'auto' }}>
                    <h5 className="modal-title align-items-center">Penambahan Tipe Arsip</h5>
                  </div>
                  <div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                </div>
                <div className="modal-body">
                  <img src="assets/images/documents.png" alt width="90px" height="90px" style={{ display: 'block', margin: '0 auto', marginBottom: 20 }} />
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Tipe Arsip</label>
                      <input type="text" value={type.name} onChange={(e) => setType({ name: e.target.value })} name="name" className="form-control radius-30" placeholder="Masukkan Tipe Arsip" />
                    </div>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className="w-50">
                        <button type="button" className="btn-batal" style={{ width: '100%' }}>Batal</button>
                      </div>
                      <div className="w-50">
                        <button type="submit" className="btn-tambah" style={{ width: '100%' }}>Simpan</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="p-3 pt-0">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
