import { Link, useNavigate, useLocation } from "react-router-dom";

export default function HistoryDigitalStaff () {
  const navigate = useNavigate();
    const location = useLocation();

    const tab = location.pathname.includes("HistoryDigitalStaff") ? "HistoryDigitalStaff" : "Arsip Fisik";

	return (
		<div className="wrapper">
  {/*sidebar wrapper */}
  <div className="sidebar-wrapper" data-simplebar="true">
    <div className="sidebar-header" style={{border: 'none', justifyContent: 'center'}}>
      <div className>
        <h4 className="logo-text" style={{fontWeight: 600, fontSize: 20, marginLeft: 0}}>Arsip Digital Bank</h4>
      </div>
    </div>
    {/*navigation*/}
    <ul className="metismenu p-3" id="menu">
          <h6 className="ms-3 mb-3">MAIN MENU</h6>
          <li>
            <Link to="/dashboardStaff" className="link">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/dataArsipStaff" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Data Arsip" />
              </div>
              <div className="menu-title">Data Arsip</div>
            </Link>
          </li>
          <li>
            <Link to="/logPengajuanStaff" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Log Pengajuan" />
              </div>
              <div className="menu-title">Log Pengajuan</div>
            </Link>
          </li>
          <li>
            <Link to="/logHistoryStaff" className="link">
              <div className="parent-icon">
                <img src="/assets/images/history.png" alt="Log History" />
              </div>
              <div className="menu-title">Log History</div>
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
                <img src="/assets/images/bell-dot.png" width="25px" height="25px" alt />
            </li>
          </ul>
        </div>
        <div className="user-box" style={{border: 'none'}}>
          <div className="col">
            <button type="button" className="btn-avatar p-3 pt-1 pb-1">
              <img src="/assets/images/Avatar.png" alt style={{marginRight: 10}} />
              Pegawai
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
        <div className="search-bar d-flex align-items-center" style={{marginBottom: 10}}>
          <h4 style={{marginBottom: 0}}>Log History</h4>
        </div>
      </div>
        {/* Log Pengajuan Digital */}
      <div className="d-flex align-items-center mb-3">
        <div className="search-bar flex-grow-1">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li onClick={() => navigate("/logHistoryStaff")} className={`nav-item ${tab === "Arsip Fisik" ? "active" : ""}`} role="presentation" style={{width: '50%', cursor: 'pointer'}}>
              <div className="nav-link" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="tab-title">Arsip Fisik</div>
                </div>
              </div>
            </li>
            <li onClick={() => navigate("/logHistoryStaff/HistoryDigitalStaff")} className={`nav-item ${tab === "HistoryDigitalStaff" ? "active" : ""}`} role="presentation" style={{width: '50%', cursor: 'pointer'}}>
              <div className="nav-link active" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="tab-title">Arsip Digital</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div className="dropdown bg-white my-3" style={{height: 38}}> 
          <div className="d-flex justify-content-between">
            <a href="#" className="btn btn-white btn-sm my-3 mt-0 p-2 pe-0" style={{border: 'none'}} data-bs-toggle="dropdown" data-display="static">Tipe<i className="bx bxs-chevron-down ms-5" /></a>
            <a href="#" className="btn btn-white btn-sm my-3 mt-0 p-2 pe-0" style={{border: 'none'}} data-bs-toggle="dropdown" data-display="static">Kategori<i className="bx bxs-chevron-down ms-5" /></a>
            <a href="#" className="btn btn-white btn-sm my-3 mt-0 p-2 pe-0" style={{border: 'none'}} data-bs-toggle="dropdown" data-display="static">Status<i className="bx bxs-chevron-down ms-5" /></a>
          </div>
        </div>
        <div className="customers-list mb-3">
          <div className="customers-list-item cursor-pointer bg-white" style={{marginBottom: 15}}>
            <div className="top d-flex align-items-center justify-content-between p-3">
              <div className="kiri" style={{alignItems: 'center'}}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/iconpdf.png" width={60} height={60} alt />
                  <h6 className="ms-3 mb-0">PP Investasi</h6>
                </div>
              </div>
              <div className="kanan" style={{display: 'flex'}}>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#46D657', height: 35}}>	
                  <div className>
                    <p className="mb-0" style={{color: 'white'}}>Disetujui</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className>
                    <p className="mb-0">Sedang Dipinjam</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className="kanan d-flex align-items-center">
                    <div className style={{marginRight: 10}}>
                      <p className="mb-0">4 jam : 24 menit : 30 detik</p>
                    </div>
                    <div className>
                      <img src="/assets/images/clock.png" width={15} height={15} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Jenis</h7> : <h7 className="mb-0 text-secondary">File</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tipe</h7> : <h7 className="mb-0 text-secondary">Statis</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tujuan</h7> : <h7 className="mb-0 text-secondary">Print</h7>
                </div>		
                <div>
                  <h7 className="mb-1 font-weight-bold">Petugas</h7> : <h7 className="mb-0 text-secondary">Dafa Maulana</h7>
                </div>		
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengajuan</h7> : <h7 className="mb-0 text-secondary">1 Desember 2025 <br />| 07:00:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Diterima</h7> : <h7 className="mb-0 text-secondary">1 November 2025 <br />| 10:30:00 wib</h7>
                </div>
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Batas Peminjaman</h7> : <h7 className="mb-0 text-secondary">1 Desember <br />2025 | 18:30:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengembalian</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
              </div>
              <div>
                <img src="/assets/images/qr-code.png" width="70%" height="80%" alt />
              </div>
            </div>
            <div className="d-flex mt-1">
              <div className="p-3 pt-0 pe-1">
                <img src="/assets/images/pin.png" width={15} height={15} alt />
              </div>
              <div>
                <p className="me-1">Gedung A</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lantai 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Ruang 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lemari 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Folder 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p>Nomor 1</p>
              </div>
            </div>
          </div>
          <div className="customers-list-item cursor-pointer bg-white" style={{marginBottom: 15}}>
            <div className="top d-flex align-items-center justify-content-between p-3">
              <div className="kiri" style={{alignItems: 'center'}}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/iconpdf.png" width={60} height={60} alt />
                  <h6 className="ms-3 mb-0">PP Investasi</h6>
                </div>
              </div>
              <div className="kanan" style={{display: 'flex'}}>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#F83434', height: 35}}>	
                  <div className>
                    <p className="mb-0" style={{color: 'white'}}>Belum Dikembalikan</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className>
                    <p className="mb-0">Sedang Dipinjam</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className="kanan d-flex align-items-center">
                    <div className style={{marginRight: 10}}>
                      <p className="mb-0">+4 jam : 24 menit : 30 detik</p>
                    </div>
                    <div className>
                      <img src="/assets/images/alert.png" width={15} height={15} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Jenis</h7> : <h7 className="mb-0 text-secondary">File</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tipe</h7> : <h7 className="mb-0 text-secondary">Statis</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tujuan</h7> : <h7 className="mb-0 text-secondary">Print</h7>
                </div>		
                <div>
                  <h7 className="mb-1 font-weight-bold">Petugas</h7> : <h7 className="mb-0 text-secondary">Dafa Maulana</h7>
                </div>		
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengajuan</h7> : <h7 className="mb-0 text-secondary">1 Desember 2025 <br />| 07:00:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Diterima</h7> : <h7 className="mb-0 text-secondary">1 November 2025 <br />| 10:30:00 wib</h7>
                </div>
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Batas Peminjaman</h7> : <h7 className="mb-0 text-secondary">1 Desember <br />2025 | 18:30:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengembalian</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Alasan</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
              </div>
              <div>
                <img src="/assets/images/qr-code.png" width="70%" height="80%" alt />
              </div>
            </div>
            <div className="d-flex mt-1">
              <div className="p-3 pt-0 pe-1">
                <img src="/assets/images/pin.png" width={15} height={15} alt />
              </div>
              <div>
                <p className="me-1">Gedung A</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lantai 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Ruang 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lemari 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Folder 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p>Nomor 1</p>
              </div>
            </div>
          </div>
          <div className="customers-list-item cursor-pointer bg-white" style={{marginBottom: 15}}>
            <div className="top d-flex align-items-center justify-content-between p-3">
              <div className="kiri" style={{alignItems: 'center'}}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/iconpdf.png" width={60} height={60} alt />
                  <h6 className="ms-3 mb-0">PP Investasi</h6>
                </div>
              </div>
              <div className="kanan" style={{display: 'flex'}}>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#F8A634', height: 35}}>	
                  <div className>
                    <p className="mb-0" style={{color: 'white'}}>Menunggu Persetujuan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Jenis</h7> : <h7 className="mb-0 text-secondary">File</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tipe</h7> : <h7 className="mb-0 text-secondary">Statis</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tujuan</h7> : <h7 className="mb-0 text-secondary">Print</h7>
                </div>		
                <div>
                  <h7 className="mb-1 font-weight-bold">Petugas</h7> : <h7 className="mb-0 text-secondary">Dafa Maulana</h7>
                </div>		
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengajuan</h7> : <h7 className="mb-0 text-secondary">1 Desember 2025 <br />| 07:00:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Diterima</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Batas Peminjaman</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengembalian</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
              </div>
              <div>
                <img src="/assets/images/qr-code.png" width="70%" height="80%" alt />
              </div>
            </div>
            <div className="d-flex mt-1">
              <div className="p-3 pt-0 pe-1">
                <img src="/assets/images/pin.png" width={15} height={15} alt />
              </div>
              <div>
                <p className="me-1">Gedung A</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lantai 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Ruang 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lemari 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Folder 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p>Nomor 1</p>
              </div>
            </div>
          </div>
          <div className="customers-list-item cursor-pointer bg-white" style={{marginBottom: 15}}>
            <div className="top d-flex align-items-center justify-content-between p-3">
              <div className="kiri" style={{alignItems: 'center'}}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/iconpdf.png" width={60} height={60} alt />
                  <h6 className="ms-3 mb-0">PP Investasi</h6>
                </div>
              </div>
              <div className="kanan" style={{display: 'flex'}}>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                  <div className>
                    <p className="mb-0" style={{color: 'white'}}>Dikembalikan</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className="kanan d-flex align-items-center">
                    <div className style={{marginRight: 10}}>
                      <p className="mb-0">Telah Dikembalikan Tepat Waktu</p>
                    </div>
                    <div className>
                      <img src="/assets/images/check.png" width={15} height={15} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Jenis</h7> : <h7 className="mb-0 text-secondary">File</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tipe</h7> : <h7 className="mb-0 text-secondary">Statis</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tujuan</h7> : <h7 className="mb-0 text-secondary">Print</h7>
                </div>		
                <div>
                  <h7 className="mb-1 font-weight-bold">Petugas</h7> : <h7 className="mb-0 text-secondary">Dafa Maulana</h7>
                </div>		
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengajuan</h7> : <h7 className="mb-0 text-secondary">1 Desember 2025 <br />| 07:00:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Diterima</h7> : <h7 className="mb-0 text-secondary">1 November 2025 <br />| 10:30:00 wib</h7>
                </div>
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Batas Peminjaman</h7> : <h7 className="mb-0 text-secondary">1 Desember <br />2025 | 18:30:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengembalian</h7> : <h7 className="mb-0 text-secondary">...</h7>
                </div>
              </div>
              <div>
                <img src="/assets/images/qr-code.png" width="70%" height="80%" alt />
              </div>
            </div>
            <div className="d-flex mt-1">
              <div className="p-3 pt-0 pe-1">
                <img src="/assets/images/pin.png" width={15} height={15} alt />
              </div>
              <div>
                <p className="me-1">Gedung A</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lantai 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Ruang 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lemari 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Folder 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p>Nomor 1</p>
              </div>
            </div>
          </div>
          <div className="customers-list-item cursor-pointer bg-white" style={{marginBottom: 15}}>
            <div className="top d-flex align-items-center justify-content-between p-3">
              <div className="kiri" style={{alignItems: 'center'}}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/iconpdf.png" width={60} height={60} alt />
                  <h6 className="ms-3 mb-0">PP Investasi</h6>
                </div>
              </div>
              <div className="kanan" style={{display: 'flex'}}>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                  <div className>
                    <p className="mb-0" style={{color: 'white'}}>Dikembalikan</p>
                  </div>
                </div>
                <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, height: 35}}>	
                  <div className="kanan d-flex align-items-center">
                    <div className style={{marginRight: 10}}>
                      <p className="mb-0">Telah Dikembalikan Melebihi Deadline</p>
                    </div>
                    <div className>
                      <img src="/assets/images/message-warning.png" width={15} height={15} alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Jenis</h7> : <h7 className="mb-0 text-secondary">File</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tipe</h7> : <h7 className="mb-0 text-secondary">Statis</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Tujuan</h7> : <h7 className="mb-0 text-secondary">Print</h7>
                </div>		
                <div>
                  <h7 className="mb-1 font-weight-bold">Petugas</h7> : <h7 className="mb-0 text-secondary">Dafa Maulana</h7>
                </div>		
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengajuan</h7> : <h7 className="mb-0 text-secondary">1 Desember 2025 <br />| 07:00:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Diterima</h7> : <h7 className="mb-0 text-secondary">1 November 2025 <br />| 10:30:00 wib</h7>
                </div>
              </div>
              <div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Batas Peminjaman</h7> : <h7 className="mb-0 text-secondary">1 Desember <br />2025 | 18:30:00 wib</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Waktu Pengembalian</h7> : <h7 className="mb-0 text-secondary">1 November <br />2025 | 21:00:00 wib (+1 jam lebih lama)</h7>
                </div>
                <div>
                  <h7 className="mb-1 font-weight-bold">Alasan</h7> : <h7 className="mb-0 text-secondary">Masih membutuhkan dokumen</h7>
                </div>
              </div>
              <div>
                <img src="/assets/images/qr-code.png" width="70%" height="60%" alt />
              </div>
            </div>
            <div className="d-flex mt-1">
              <div className="p-3 pt-0 pe-1">
                <img src="/assets/images/pin.png" width={15} height={15} alt />
              </div>
              <div>
                <p className="me-1">Gedung A</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lantai 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Ruang 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Lemari 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p className="me-1">Folder 1</p>
              </div>
              <div>
                <img src="/assets/images/Vector.png" style={{marginRight: 5}} width={5} height={10} alt />
              </div>
              <div>
                <p>Nomor 1</p>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center'}}>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="javascript:;" aria-label="Previous">	<span aria-hidden="true">«</span>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="javascript:;">1</a>
              </li>
              <li className="page-item"><a className="page-link" href="javascript:;">2</a>
              </li>
              <li className="page-item"><a className="page-link" href="javascript:;">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript:;" aria-label="Next">	<span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
      </div></div></div>

	);
}


