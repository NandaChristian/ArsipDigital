import { Link, useNavigate, useLocation } from "react-router-dom";
import { PengajuanContext } from "../../context/PengajuanContext";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import AdminLayout from "../layouts/AdminLayout";

export default function LemariMaster() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cabinet, setCabinet] = useState({
    building_uuid: "",
    floor_uuid: "",
    room_uuid: "",
    name: ""
  })
  const [isEdit, setIsEdit] = useState(false);
  const [currentUuid, setCurrentUuid] = useState(null);
  const [floorBuild, setFloorBuild] = useState([])
  const [roomBuild, setRoomBuild] = useState([])
  const { token, gedungs, floors, rooms, cabinets, getCabinets } = React.useContext(PengajuanContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit
      ? `${import.meta.env.VITE_API_URL}/api/cabinets/${currentUuid}`
      : `${import.meta.env.VITE_API_URL}/api/cabinets`;

    const method = isEdit ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cabinet),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Login Gagal');
      }
      getCabinets(token)
    } catch (error) {
      // 'error.message' akan berisi pesan dari 'throw new Error' di atas
      console.error('Login Gagal:', error.message);
    }
  };
  const handleEdit = (cabinetItem) => {
    setIsEdit(true);
    setCurrentUuid(cabinetItem.uuid);

    const bUuid = cabinetItem.room?.floor?.building_uuid || "";
    const fUuid = cabinetItem.room?.floor_uuid || "";
    const rUuid = cabinetItem.room_uuid || "";

    setFloorBuild(floors?.filter(f => f.building_uuid === bUuid));
    setRoomBuild(rooms?.filter(r => r.floor_uuid === fUuid));


    setCabinet({
      building_uuid: bUuid,
      floor_uuid: fUuid,
      room_uuid: rUuid,
      name: cabinetItem.name // Pastikan property 'name' ada di folderItem
    });
  };
  const handleDelete = async (currentCabinet) => {
    if (window.confirm("Peringatan: Menghapus item ini akan menghapus semua sub-item di dalamnya!")) {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL + '/api/cabinets/' + currentCabinet.uuid, {
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
        getCabinets(token)
      } catch (error) {
        // 'error.message' akan berisi pesan dari 'throw new Error' di atas
        console.error('Login Gagal:', error.message);
      }
    }
  };
  function handleChangeBuild(uuid) {
    const filterFloor = floors?.filter((floor) => floor.building_uuid == uuid);
    setCabinet({ ...cabinet, building_uuid: uuid })
    setFloorBuild(filterFloor)
  }
  function handleChangeFloor(uuid) {
    const filterRoom = rooms?.filter((room) => room.floor_uuid == uuid);
    setCabinet({ ...cabinet, floor_uuid: uuid })
    setRoomBuild(filterRoom)
  }

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
                    <button
                      onClick={() => {
                        setIsEdit(false);
                        setCabinet({ building_uuid: "", floor_uuid: "", room_uuid: "", name: "" });
                      }}
                      type="button"
                      className="btn-tambah px-5 mt-2 mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahLemariMaster"
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
              {cabinets?.map((cabinet) => (
                <div key={cabinet.uuid} className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{ marginBottom: 15 }}>
                  <div className="kiri" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className>
                      <img src="/assets/images/block.png" width={40} height={50} alt />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1 font-14">{cabinet.name}</h6>
                    </div>
                  </div>
                  <div className="kanan" style={{ display: 'flex' }}>
                    <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                      <div className>
                        <h7 className="mb-1">Aksi:</h7>
                      </div>
                      <div className="w-45">
                        <button
                          onClick={() => handleEdit(cabinet)}
                          type="button"
                          className="btn-edit pt-1 pb-1"
                          data-bs-toggle="modal"
                          data-bs-target="#tambahLemariMaster"
                          style={{ width: '100%' }}
                        >
                          <img src="/assets/images/edit.png" alt="" width="15px" height="15px" style={{ marginRight: 8 }} />
                          Edit
                        </button>
                      </div>
                      <div className="w-45">
                        <button onClick={() => handleDelete(cabinet)} type="submit" className="btn-hapus pt-1 pb-1" style={{ width: '100%' }}><img src="/assets/images/hapus.png" width="15px" height="15px" style={{ marginRight: 8 }} alt />Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Modal Tambah User */}
          <div className="modal fade" id="tambahLemariMaster" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header" style={{ border: 'none' }}>
                  <div className style={{ margin: 'auto' }}>
                    <h5 className="modal-title align-items-center">Penambahan Lemari</h5>
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
                      <select name="building_uuid" required value={cabinet.building_uuid} onChange={(e) => handleChangeBuild(e.target.value)} id="">
                        <option value="">Pilih Gedung</option>
                        {gedungs?.map((gedung) => (
                          <option key={gedung.uuid} value={gedung.uuid}>{gedung.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Pilih Lantai</label>
                      <select name="floor_uuid" required value={cabinet.floor_uuid} onChange={(e) => handleChangeFloor(e.target.value)} id="">
                        <option value="">Pilih Lantai</option>
                        {floorBuild?.map((floor) => (
                          <option key={floor.uuid} value={floor.uuid}>{floor.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Pilih Lantai</label>
                      <select name="room_uuid" required value={cabinet.room_uuid} onChange={(e) => setCabinet({ ...cabinet, room_uuid: e.target.value })} id="">
                        <option value="">Pilih Ruang</option>
                        {roomBuild?.map((room) => (
                          <option key={room.uuid} value={room.uuid}>{room.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Lemari</label>
                      <input type="text" name="name" required value={cabinet.name} onChange={(e) => setCabinet({ ...cabinet, name: e.target.value })} className="form-control radius-30" placeholder="Masukkan Ruang Arsip" />
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