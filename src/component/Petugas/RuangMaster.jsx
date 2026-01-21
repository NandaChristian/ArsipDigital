import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PengajuanContext } from "../../context/PengajuanContext";
import Sidebar from "../Sidebar";

export default function RuangMaster() {
  const navigate = useNavigate();
  const location = useLocation();
  const [room, setRoom] = useState({
    building_uuid: "",
    floor_uuid: "",
    name: ""
  })
  const [isEdit, setIsEdit] = useState(false);
  const [currentUuid, setCurrentUuid] = useState(null);
  const [floorBuild, setFloorBuild] = useState([])
  const { token, gedungs, floors, rooms, getRooms } = React.useContext(PengajuanContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit
      ? `${import.meta.env.VITE_API_URL}/api/rooms/${currentUuid}`
      : `${import.meta.env.VITE_API_URL}/api/rooms`;

    const method = isEdit ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(room),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login Gagal');
      }
      getRooms(token)
    } catch (error) {
      // 'error.message' akan berisi pesan dari 'throw new Error' di atas
      console.error('Login Gagal:', error.message);
    }
  };
  const handleDelete = async (currentRoom) => {
    if (window.confirm("Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!")) {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/rooms/' + currentRoom.uuid, {
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
        getRooms(token)
      } catch (error) {
        // 'error.message' akan berisi pesan dari 'throw new Error' di atas
        console.error('Login Gagal:', error.message);
      }
    }
  };
  const handleEdit = (roomItem) => {
    setIsEdit(true);
    setCurrentUuid(roomItem.uuid);

    const bUuid = roomItem.floor?.building_uuid || "";
    const fUuid = roomItem.floor_uuid || "";

    setFloorBuild(floors?.filter(f => f.building_uuid === bUuid));
    setRoom({
      building_uuid: bUuid,
      floor_uuid: fUuid,
      name: roomItem.name // Pastikan property 'name' ada di folderItem
    });
  };
  function handleChangeBuild(uuid) {
    const filterFloor = floors?.filter((floor) => floor.building_uuid == uuid);
    setRoom({ ...room, building_uuid: uuid })
    setFloorBuild(filterFloor)
  }

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
        <ul className="metismenu p-3" id="menu">
          <h6 className="ms-3 mb-3">MAIN MENU</h6>
          <li>
            <Link to="/dashboardPetugas" className="link">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          {/* <li>
            <Link to="/dataUserPetugas" className="link">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Data User</div>
            </Link>
          </li> */}
          <li>
            <Link to="/dataArsipPetugas" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Data Arsip" />
              </div>
              <div className="menu-title">Data Arsip</div>
            </Link>
          </li>
          <li>
            <Link to="/dataMaster" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Log Pengajuan" />
              </div>
              <div className="menu-title">Data Master</div>
            </Link>
          </li>
          <li>
            <Link to="/approvalPetugas" className="link">
              <div className="parent-icon">
                <img src="/assets/images/history.png" alt="Log History" />
              </div>
              <div className="menu-title">Approval</div>
            </Link>
          </li>
        </ul>
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
                  <a className="nav-link position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/assets/images/bell-dot.png" width="25px" height="25px" alt />
                  </a>
                </li>
              </ul>
            </div>
            <div className="user-box" style={{ border: 'none' }}>
              <div className="col">
                <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-30">
                  <img src="/assets/images/Avatar.png" alt style={{ marginRight: 10 }} />
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
                        setRoom({ building_uuid: "", floor_uuid: "", name: "" });
                      }}
                      type="button"
                      className="btn-tambah px-5 mt-2 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahRuangMaster"
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
              {rooms?.map((room) => (
                <div key={room.uuid} className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{ marginBottom: 15 }}>
                  <div className="kiri" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className>
                      <img src="/assets/images/block.png" width={40} height={50} alt />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{room.name}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: 'flex' }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h7 className="mb-1">Aksi:</h7>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleEdit(room)}
                          type="button"
                          className="btn-edit pt-1 pb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#tambahRuangMaster"
                          style={{ width: '100%' }}
                        >
                          <img src="/assets/images/edit.png" alt="" width="15px" height="15px" style={{ marginRight: 8 }} />
                          Edit
                        </button>
                      </div>
                      <div className="w-45">
                        <button onClick={() => handleDelete(room)} type="submit" className="btn-hapus pt-1 pb-1" style={{ width: '100%' }}><img src="/assets/images/hapus.png" width="15px" height="15px" style={{ marginRight: 8 }} alt />Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Tambah User */}
          <div className="modal fade" id="tambahRuangMaster" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: 'none' }}>
                  <div className style={{ margin: 'auto' }}>
                    <h5 className="modal-title align-items-center">Penambahan Ruang</h5>
                  </div>
                  <div>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                </div>
                <div className="modal-body">
                  <img src="/assets/images/documents.png" alt width="90px" height="90px" style={{ display: 'block', margin: '0 auto', marginBottom: 20 }} />
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label">Pilih Gedung</label>
                      <select name="building_uuid" required value={room.building_uuid} onChange={(e) => handleChangeBuild(e.target.value)} id="">
                        <option value="">Pilih Gedung</option>
                        {gedungs?.map((gedung) => (
                          <option key={gedung.uuid} value={gedung.uuid}>{gedung.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Pilih Lantai</label>
                      <select name="floor_uuid" required value={room.floor_uuid} onChange={(e) => setRoom({ ...room, floor_uuid: e.target.value })} id="">
                        <option value="">Pilih Lantai</option>
                        {floorBuild?.map((floor) => (
                          <option key={floor.uuid} value={floor.uuid}>{floor.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ruang</label>
                      <input type="text" name="name" required value={room.name} onChange={(e) => setRoom({ ...room, name: e.target.value })} className="form-control radius-30" placeholder="Masukkan Ruang Arsip" />
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
    </div>
  )
}