import { Link } from "react-router-dom";

export default function DashboardPetugas () {
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
            <Link to="/dashboardStaff">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/dataUser">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Data User</div>
            </Link>
          </li>
          <li>
            <Link to="/dataArsipStaff">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Data Arsip" />
              </div>
              <div className="menu-title">Data Arsip</div>
            </Link>
          </li>
          <li>
            <Link to="/dataMaster">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Log Pengajuan" />
              </div>
              <div className="menu-title">Data Master</div>
            </Link>
          </li>
          <li>
            <Link to="/approval">
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
        <div className="search-bar">
          <h4 className="mb-0">Selamat Datang</h4>
        </div>
        <div className="top-menu ms-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown dropdown-large">
                <img src="assets/images/bell-dot.png" width="25px" height="25px" alt />
            </li>
          </ul>
        </div>
        <div className="user-box" style={{border: 'none'}}>
          <div className="col">
            <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-10">
              <img src="assets/images/Avatar.png" alt style={{marginRight: 10}} />
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
        <div className="search-bar">
          <h4>Selamat Datang</h4>
        </div>
        <div className="top-menu ms-auto  ">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown dropdown-large">
            </li>
          </ul>
        </div>
        <img src="assets/images/Frame 14.png" className="user-img" alt="user avatar" />
        <div className="user-info">
          <p className="user-name mb-0">Rabu</p>
          <p className="designattion mb-0">November 2025</p>
        </div>
        <div className="user-box">
          <div className="col">
            <button type="button" className="btn btn-primary px-5 radius-50">Approve Permintaan</button>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <h6>Rekap Per bulan</h6>
      </div>
      <div className="pim-row d-flex">
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4">
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"><img src="assets/images/file-archive.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Total Arsip</p>
                  <h4 className="my-1">20</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-success text-success mb-3"><img src="assets/images/circle-check.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Total Kategori</p>
                  <h4 className="my-1">12</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"><img src="assets/images/file-archive.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Total Petugas</p>
                  <h4 className="my-1">11</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3"><img src="assets/images/file-archive.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Total User</p>
                  <h4 className="my-1">8</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><img src="assets/images/file-warning.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Permintaan Disetujui</p>
                  <h4 className="my-1">2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><img src="assets/images/file-warning.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">Permintaan Ditolak</p>
                  <h4 className="my-1">2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><img src="assets/images/file-warning.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">File Dipinjam</p>
                  <h4 className="my-1">2</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10">
              <div className="card-body">
                <div className="text-center">
                  <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><img src="assets/images/file-warning.png" alt />
                  </div>
                  <p className="mb-0 text-secondary">File Belum Dikembalikan</p>
                  <h4 className="my-1">2</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card radius-10">
            <div className="card-body">
              <div className="text-center">
                <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3"><img src="assets/images/file-warning.png" alt />
                </div>
                <p className="mb-0 text-secondary">Permintaan Peminjaman</p>
                <h4 className="my-1">2</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-xl-2">
        <div className="col d-flex">
          <div className="card radius-10 w-100">
            <div className="card-body">
              <div id="chart3" />
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className="card radius-10 w-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <h5 className="mb-1">Nama Arsip</h5>
                  <p className="mb-0 font-13 text-secondary">OJK</p>
                </div>
                <div className="font-22 ms-auto">
                  <button type="button" className="btn btn-primary radius-30">Pengajuan Peminjaman</button>
                </div>
              </div>
            </div>
            <div className>
              <div className="row">
                <div className="d-flex">
                  <div className>
                    <img src="assets/images/icons/chair.png" width={148} height={120} alt />
                  </div>
                </div>
                <div className="colom d-flex" style={{flexDirection: 'column'}}>
                  <div className="kolom d-flex">
                    <div className>
                      <h6 className="mb-1">Nama Pengguna</h6>
                      <p className="mb-0">Citra</p>
                    </div>
                    <div className>
                      <h6 className="mb-1">Hak Akses</h6>
                      <p className="mb-0">2</p>
                    </div>
                  </div>
                  <div className="kolom d-flex">
                    <div className>
                      <h6 className="mb-1">Tipe Arsip</h6>
                      <p className="mb-0">Digital</p>
                    </div>
                    <div className>
                      <h6 className="mb-1">Waktu Permintaan</h6>
                      <p className="mb-0">21 November 2026 | <br />15:32</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <ul className="nav nav-pills mb-3 d-flex justify-content-between" role="tablist">
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Terbesar</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Yang Banyak Di Akses</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">User Yang Sering Akses</div>
                  </div>
                </a>
              </li>
            </ul>
            {/* File Terbesar */}
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Digital</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Digital</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Digital</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row border 1">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Digital</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
      {/* File Yang Banyak Diakses */}
      <div className="col d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <ul className="nav nav-pills mb-3 d-flex justify-content-between" role="tablist">
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Terbesar</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Yang Banyak Di Akses</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">User Yang Sering Akses</div>
                  </div>
                </a>
              </li>
            </ul>
            {/* File Terbesar */}
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Fisik</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Fisik</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Fisik</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            <div className="row border 1">
              <div className="col-md-2 text-end d-grid">
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="col-md-10">
                <div className="kanan" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                  <h6 className="ms-3 mb-0">OJK</h6>
                  <div className="d-flex align-items-center border p-2 radius-10" style={{marginRight: 10, background: '#3468F8', height: 35}}>	
                    <div className>
                      <p className="mb-0" style={{color: 'white'}}>Fisik</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex  justify-content-between pt-0 pb-1 p-3">
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Kategori</h7> : <h7 className="mb-0 text-secondary">OJK</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Sub Kategori</h7> : <h7 className="mb-0 text-secondary">PP</h7>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Ukuran</h7> : <h7 className="mb-0 text-secondary">80 MB</h7>
                    </div>
                    <div>
                      <h7 className="mb-1 font-weight-bold">Waktu Upload</h7> : <h7 className="mb-0 text-secondary">1 November 2025 | 10:30:00</h7>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
      {/* User Yang Sering Akses */}
      <div className="col d-flex">
        <div className="card radius-10 w-100">
          <div className="card-body">
            <ul className="nav nav-pills mb-3 d-flex justify-content-between" role="tablist">
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Terbesar</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">File Yang Banyak Di Akses</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation" style={{width: '30%'}}>
                <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="tab-title">User Yang Sering Akses</div>
                  </div>
                </a>
              </li>
            </ul>
            {/* File Terbesar */}
            <a href="javascript:;" className="list-group-item">
              <div className="d-flex">
                <div className="chat-user-online">
                  <img src="assets/images/avatars/avatar-2.png" width={42} height={42} className="rounded-circle" alt />
                </div>
                <div className="flex-grow-1 ms-2">
                  <h6 className="mb-0 chat-title">Louis Litt</h6>
                  <p className="mb-0 chat-msg">You just got LITT up, Mike.</p>
                </div>
                <div className="chat-time">9:51 AM</div>
              </div>
            </a>           
          </div>
        </div>
      </div>
    </div>
  </div></div>
    );
}

