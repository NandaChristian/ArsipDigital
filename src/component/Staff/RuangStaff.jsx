import { Link } from "react-router-dom"

export default function RuangStaff () {
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
              <a className="nav-link position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/images/bell-dot.png" width="25px" height="25px" alt />
              </a>
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
        <Link to="/dataArsipStaff" className="link">
        <div className="search-bar flex-grow-1 d-flex align-items-center" style={{marginBottom: 10}}>
          <img src="/assets/images/arrow-left.png" alt style={{width: 30, height: 30, marginRight: 10}} /><h4 style={{marginBottom: 0, color: 'black'}}>Ruang</h4>
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
            <button type="button" className="btn-pengajuan px-5 pb-2 pt-2">Pengajuan Peminjaman</button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="/assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ruang 1</h5>
              <p className="card-text">Training &amp; Development</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <Link to="/dataArsipStaff/ruangStaff/lemariStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lemari</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipStaff/detailFisikStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="/assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ruang 2</h5>
              <p className="card-text">Arsip Kepegawaian dan SDM</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <Link to="/dataArsipStaff/lantaiStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lemari</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipStaff/ruangStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="/assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Ruang 3</h5>
              <p className="card-text">Training &amp; Development</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <Link to="/dataArsipStaff/lantaiStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lemari</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipStaff/ruangStaff" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="/assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div></div>
		
	)
}