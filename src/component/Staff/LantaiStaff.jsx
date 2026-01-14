import { Link } from "react-router-dom";

export default function LantaiStaff () {
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
            <Link to="/dataArsipStaff">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Data Arsip" />
              </div>
              <div className="menu-title">Data Arsip</div>
            </Link>
          </li>
          <li>
            <Link to="/logPengajuanStaff">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Log Pengajuan" />
              </div>
              <div className="menu-title">Log Pengajuan</div>
            </Link>
          </li>
          <li>
            <Link to="/logHistoryStaff">
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
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="assets/images/bell-dot.png" width="25px" height="25px" alt />
              </a>
            </li>
          </ul>
        </div>
        <div className="user-box" style={{border: 'none'}}>
          <div className="col">
            <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-30">
              <img src="assets/images/Avatar.png" alt style={{marginRight: 10}} />
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
        <Link to="/dataArsipStaff">
        <div className="search-bar flex-grow-1 d-flex align-items-center" style={{marginBottom: 10}}>
          <img src="assets/images/arrow-left.png" alt style={{width: 30, height: 30, marginRight: 10}} /><h4 style={{marginBottom: 0}}>Lantai</h4>
        </div>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <div className="search-bar flex-grow-1">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item" role="presentation" style={{width: '50%'}}>
              <a className="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="tab-title">Arsip Fisik</div>
                </div>
              </a>
            </li>
            <li className="nav-item" role="presentation" style={{width: '50%'}}>
              <a className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="tab-title">Arsip Digital</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="user-box">
          <div className="col mb-3">
            <button type="button" className="btn btn-primary px-5 radius-30">Pengajuan Peminjaman</button>
          </div>
        </div>
      </div>
      <div className="customers-list mb-3">
        <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white" style={{marginBottom: 15}}>
          <div className="kiri" style={{display: 'flex', alignItems: 'center'}}>
            <div className>
              <img src="assets/images/block.png" width={60} height={80} alt />
            </div>
            <div className="ms-2">
              <h6 className="mb-1 font-14">Lantai 2</h6>
              <p className="mb-0 font-13 text-secondary">Training &amp; Development</p>
            </div>
          </div>
          <div className="kanan" style={{display: 'flex'}}>
            <div className="list-inline d-flex customers-contacts ms-auto align-items-center border p-3 radius-10" style={{marginRight: 10}}> 	
              <div className="kanan d-flex align-items-center">
                <div className style={{marginRight: 10}}>
                  <p className="mb-0">Ruang</p>
                  <p className="mb-0 font-18">10</p>
                </div>
                <div className>
                  <img src="assets/images/building.png" width={24} height={24} alt />
                </div>
              </div>
            </div>
            <div className="list-inline d-flex customers-contacts ms-auto align-items-center border p-3 radius-10" style={{marginRight: 10}}>	
              <div className="kanan d-flex align-items-center">
                <div className style={{marginRight: 10}}>
                  <p className="mb-0">Arsip</p>
                  <p className="mb-0 font-18">100</p>
                </div>
                <div className>
                  <img src="assets/images/file-archive.png" width={24} height={24} alt />
                </div>
              </div>
            </div>
            <div className="kanan d-flex align-items-center">
              <img src="assets/images/Vector.png" width={10} height={10} alt />
            </div>
          </div>
        </div>
        <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white" style={{marginBottom: 15}}>
          <div className="kiri" style={{display: 'flex', alignItems: 'center'}}>
            <div className>
              <img src="assets/images/block.png" width={60} height={80} alt />
            </div>
            <div className="ms-2">
              <h6 className="mb-1 font-14">Lantai 1</h6>
              <p className="mb-0 font-13 text-secondary">Arsip Kepegawaian dan SDM</p>
            </div>
          </div>
          <div className="kanan" style={{display: 'flex'}}>
            <div className="list-inline d-flex customers-contacts ms-auto align-items-center border p-3 radius-10" style={{marginRight: 10}}> 	
              <div className="kanan d-flex align-items-center">
                <div className style={{marginRight: 10}}>
                  <p className="mb-0">Ruang</p>
                  <p className="mb-0 font-18">10</p>
                </div>
                <div className>
                  <img src="assets/images/building.png" width={24} height={24} alt />
                </div>
              </div>
            </div>
            <div className="list-inline d-flex customers-contacts ms-auto align-items-center border p-3 radius-10" style={{marginRight: 10}}>	
              <div className="kanan d-flex align-items-center">
                <div className style={{marginRight: 10}}>
                  <p className="mb-0">Arsip</p>
                  <p className="mb-0 font-18">100</p>
                </div>
                <div className>
                  <img src="assets/images/file-archive.png" width={24} height={24} alt />
                </div>
              </div>
            </div>
            <div className="kanan d-flex align-items-center">
              <img src="assets/images/Vector.png" width={10} height={10} alt />
            </div>
          </div>
        </div>
        <div className="col">
          <button type="button" className="btn btn-secondary px-5 w-100">Lantai Dasar</button>
        </div>
      </div>
    </div>
  </div></div>
  )
}
