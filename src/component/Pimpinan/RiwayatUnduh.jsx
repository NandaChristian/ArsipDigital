import { Link } from "react-router-dom";

export default function RiwayatUnduh () {
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
        <div className="search-bar flex-grow-1">
          <Link to="/menuArsipPimpinan">
          <div className="search-bar flex-grow-1 d-flex align-items-center mb-3">
            <img src="assets/images/arrow-left.png" style={{width: 30, height: 30, marginRight: 10}} />
            <h4 className="mb-0">Riwayat Unduhan</h4>
          </div>	
          </Link>
        </div>
      </div>
      <div className="list-group-item border-0 pt-3">
        <div className="w-100">
          <div className="kotak d-flex mb-4">
            <div className="d-flex border p-3 w-100">
              <div className>
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="flex-grow-1 ms-2  d-flex flex-column justify-content-center">
                <div className="mb-1">
                  <h6 className="mb-0">PJOK</h6> 
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Nama Pengunduh</h7> : <h7 className="mb-0 text-secondary">Citra</h7>
                  </div>
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Waktu Unduh</h7> : <h7 className="mb-0 text-secondary">14 November 2025 | 12:43:02 wib</h7>
                  </div>
                </div>	
              </div>							
            </div>
          </div>
          <div className="kotak d-flex mb-4">
            <div className="d-flex border p-3 w-100">
              <div className>
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="flex-grow-1 ms-2  d-flex flex-column justify-content-center">
                <div className="mb-1">
                  <h6 className="mb-0">PJOK</h6> 
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Nama Pengunduh</h7> : <h7 className="mb-0 text-secondary">Citra</h7>
                  </div>
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Waktu Unduh</h7> : <h7 className="mb-0 text-secondary">14 November 2025 | 12:43:02 wib</h7>
                  </div>
                </div>	
              </div>							
            </div>
          </div>
          <div className="kotak d-flex mb-4">
            <div className="d-flex border p-3 w-100">
              <div className>
                <img src="assets/images/iconpdf.png" width={60} height={60} alt />
              </div>
              <div className="flex-grow-1 ms-2  d-flex flex-column justify-content-center">
                <div className="mb-1">
                  <h6 className="mb-0">PJOK</h6> 
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Nama Pengunduh</h7> : <h7 className="mb-0 text-secondary">Citra</h7>
                  </div>
                  <div className="me-4">
                    <h7 className="mb-1 font-weight-bold">Waktu Unduh</h7> : <h7 className="mb-0 text-secondary">14 November 2025 | 12:43:02 wib</h7>
                  </div>
                </div>	
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
      </div>
    </div>
  </div>
</div>
);
}