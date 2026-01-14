import { Link } from "react-router-dom";

export default function MenuArsipPimpinan() {
  return (
        
// wrapper
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
            <Link to="/dashboardPimpinan" className="link">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/dataUserPimpinan" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Data User" />
              </div>
              <div className="menu-title">Data User</div>
            </Link>
          </li>
          <li>
            <Link to="/menuArsipPimpinan" className="link">
              <div className="parent-icon">
                <img src="/assets/images/clipboard-list.png" alt="Log Pengajuan" />
              </div>
              <div className="menu-title">Menu Arsip</div>
            </Link>
          </li>
          <li>
            <Link to="/approvalPimpinan" className="link">
              <div className="parent-icon">
                <img src="/assets/images/history.png" alt="Log History" />
              </div>
              <div className="menu-title">Approval</div>
          </Link>
          </li>
    </ul>
    {/* end navigation */}
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
                <img src="assets/images/bell-dot.png" width="25px" height="25px" alt />
            </li>
          </ul>
        </div>
        <div className="user-box" style={{border: 'none'}}>
          <div className="col">
            <button type="button" className="btn btn-primary px-5 pe-3 ps-3 radius-30">
              <img src="assets/images/Avatar.png" alt style={{marginRight: 10}} />
              Pimpinan
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
        <div className="search-bar flex-grow-1 mb-3">
          <h4>Menu Arsip</h4>
        </div>
        <div className="top-menu ms-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown dropdown-large">
            </li>
          </ul>
        </div>
      </div>
    
      <div className="rec d-flex gap-3 mt-4">
        <div className="col">
        <Link to="/menuArsipPimpinan/dataArsipPimpinan" className="link">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="my-1">Data Arsip</h5>
                </div>
                <div className="widgets-icons rounded-circle bg-primary text-primary">
                  <img src="assets/images/file-icon.png" alt width={29} height={28} />
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
        <div className="col">
          <Link to="/menuArsipPimpinan/logHistoryPimpinan" className="link">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="my-1">Log History</h5>
                </div>
                <div className="widgets-icons rounded-circle bg-primary text-primary">
                  <img src="assets/images/file-icon.png" alt width={29} height={28} />
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/menuArsipPimpinan/riwayatUnduh" className="link">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="my-1">Riwayat Unduhan</h5>
                </div>
                <div className="widgets-icons rounded-circle bg-primary text-primary">
                  <img src="assets/images/file-icon.png" alt width={29} height={28} />
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div></div>
)
}