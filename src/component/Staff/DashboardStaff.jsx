
import { Link } from "react-router-dom";

export default function DashboardStaff() {
  return (
    <div className="wrapper">
      {/* sidebar wrapper */}
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header" style={{border: 'none', justifyContent: 'center'}}>
          <div>
            <h4 className="logo-text" style={{fontWeight: 600, fontSize: 20, marginLeft: 0}}>
              Arsip Digital Bank
            </h4>
          </div>
        </div>
        
        {/* navigation */}
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
        {/* end navigation */}
      </div>
      {/* end sidebar wrapper */}
      
      {/* start header */}
      <header>
        <div className="topbar d-flex align-items-center">
          <nav className="navbar navbar-expand">
            <div className="mobile-toggle-menu">
              <i className="bx bx-menu" />
            </div>
            <div className="search-bar flex-grow-1">
              <h4 className="mb-0">Selamat Datang</h4>
            </div>
            <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item dropdown dropdown-large">
                    <img src="/assets/images/bell-dot.png" width="25px" height="25px" alt="Notifikasi" />
                </li>
              </ul>
            </div>
            <div className="user-box" style={{border: 'none'}}>
              <div className="col">
                <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-30">
                  <img src="/assets/images/Avatar.png" alt="Avatar" style={{marginRight: 10}} />
                  Pegawai
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end header */}
      
      {/* start page wrapper */}
      <div className="page-wrapper">
        <div className="page-content">
          <div className="d-flex align-items-center">
            <div className="search-bar flex-grow-1">
              <h4>Selamat Datang</h4>
            </div>
            <div className="top-menu ms-auto">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item dropdown dropdown-large">
                </li>
              </ul>
            </div>
            <img src="/assets/images/Frame 14.png" className="user-img" alt="user avatar" />
            <div className="user-info ps-3">
              <p className="user-name mb-0">Rabu</p>
              <p className="designattion mb-0">November 2025</p>
            </div>
            <div className="user-box">
              <div className="col">
                <button type="button" className="btn btn-primary px-5 radius-30">
                  Pengajuan Peminjaman
                </button>
              </div>
            </div>
          </div>
          
          <div className="search-bar flex-grow-1">
            <h6>Rekap Per bulan</h6>
          </div>
          
          <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5">
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="text-center">
                    <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                      <img src="/assets/images/file-archive.png" alt="Total Arsip" />
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
                    <div className="widgets-icons rounded-circle mx-auto bg-light-success text-success mb-3">
                      <img src="/assets/images/circle-check.png" alt="Total Setujui" />
                    </div>
                    <p className="mb-0 text-secondary">Total Setujui</p>
                    <h4 className="my-1">12</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="text-center">
                    <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                      <img src="/assets/images/file-archive.png" alt="Peminjaman Digital" />
                    </div>
                    <p className="mb-0 text-secondary">Peminjaman Arsip Digital</p>
                    <h4 className="my-1">11</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="text-center">
                    <div className="widgets-icons rounded-circle mx-auto bg-light-primary text-primary mb-3">
                      <img src="/assets/images/file-archive.png" alt="Peminjaman Fisik" />
                    </div>
                    <p className="mb-0 text-secondary">Peminjaman Arsip Fisik</p>
                    <h4 className="my-1">8</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card radius-10">
                <div className="card-body">
                  <div className="text-center">
                    <div className="widgets-icons rounded-circle mx-auto bg-light-danger text-danger mb-3">
                      <img src="/assets/images/file-warning.png" alt="Deadline" />
                    </div>
                    <p className="mb-0 text-secondary">Deadline Hari ini</p>
                    <h4 className="my-1">2</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <div id="chart3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}