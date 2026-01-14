import { Link, useNavigate, useLocation } from "react-router-dom";


export default function DataArsipPimpinan () {
  const navigate = useNavigate();
  const location = useLocation();

  const tab = location.pathname.includes("ArsipDigitalPimpinan") ? "ArsipDigitalPimpinan" : "Arsip Fisik";



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
        <Link to="/menuArsipPimpinan">
        <div className="search-bar flex-grow-1 d-flex align-items-center" style={{marginBottom: 10}}>
          <img src="assets/images/arrow-left.png" style={{width: 30, height: 30, marginRight: 10}} />
          <h4 style={{marginBottom: 0}}>Data Arsip</h4>
        </div>
        </Link>
      </div>
      <div className="d-flex align-items-center">
        <div className="search-bar flex-grow-1">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item" role="presentation" style={{width: '50%', cursor: 'pointer'}}>
              <div className="nav-link active" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                <div className="d-flex align-items-center justify-content-center">
                  <div  onClick={() => navigate("/menuArsipPimpinan/dataArsipPimpinan")} className={`tab-title ${tab === "Arsip Fisik" ? "active" : ""}`}>Arsip Fisik</div>
                </div>
              </div>
            </li>
            <li className="nav-item" role="presentation" style={{width: '50%', cursor: 'pointer'}}>
              <div className="nav-link" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                <div className="d-flex align-items-center justify-content-center">
                  <div  onClick={() => navigate("/menuArsipPimpinan/dataArsipPimpinan/ArsipDigitalPimpinan")} className={`tab-title ${tab === "ArsipDigitalPimpinan" ? "active" : ""}`}>Arsip Digital</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Gedung A - Utama</h5>
              <p className="card-text">Arsip Administrasi dan Keuangan</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <Link to="/dataArsipPimpinan/lantaiPimpinan" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipPimpinan/ruangPimpinan" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipPimpinan/arsipPimpinan" className="link">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt className="logo-arsip"/>
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
              <img src="assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Gedung B - Utama</h5>
              <p className="card-text">Arsip Administrasi dan Keuangan</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="assets/images/block.png" className="card-img-top" style={{width: 104, height: 146, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Gedung C - Utama</h5>
              <p className="card-text">Arsip Administrasi dan Keuangan</p>
            </div>
            <ul className="list-group list-group-flush" style={{borderTop: "none"}}>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none">
                    <div className="card-body-arsip">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt className="logo-arsip"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


        {/* Modal Tombol Pengajuan Fisik */}
        <div className="modal fade" id="modalFisik" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header" style={{border: 'none'}}>
                <h5 className="modal-title" style={{paddingLeft: '15%'}}>Formulir Peminjaman Arsip Fisik</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body pt-0">
                <img src="assets/images/documents.png" style={{width: 100, margin: 'auto', display: 'flex'}} />
                <form>
                  <div className="mb-3 mt-3">
                    <label className="form-label">Nama Petugas</label>
                    <select className="form-select mb-3"  style={{borderRadius: 30}} aria-label="Default select example">
                      <option selected>Nama Petugas</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nama Arsip</label>
                    <select className="form-select mb-3"  style={{borderRadius: 30}} aria-label="Default select example">
                      <option selected>Nama Arsip</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="line" style={{display: 'flex'}}>
                    <div className="mb-3" style={{width: '100%', marginRight: 10}}>
                      <label className="form-label">Lemari</label>
                      <select className="form-select"  style={{borderRadius: 30}} aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="mb-3" style={{width: '100%', marginRight: 10}}>
                      <label className="form-label">Rak</label>
                      <select className="form-select"  style={{borderRadius: 30}} aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="mb-3" style={{width: '100%'}}>
                      <label className="form-label">Nomor</label>
                      <select className="form-select" style={{borderRadius: 30}} aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tipe Arsip</label>
                    <input type="text" className="form-control"  style={{borderRadius: 30}} />
                  </div>
                  <label className="form-label">Jenis Arsip</label>
                  <div className="line-check" style={{display: 'flex'}}>
                    <div className="form-check" style={{marginRight: 10}}>
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">Surat</label>
                    </div>
                    <div className="form-check" style={{marginRight: 10}}>
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">Laporan</label>
                    </div>
                    <div className="form-check" style={{marginRight: 10}}>
                      <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">File</label>
                    </div>
                  </div>
                  <label className="form-label">Jenis Arsip otomatis muncul setelah memilih arsip</label>
                  <div>
                    <label className="form-label">Pilih Tujuan</label>
                    <select className="form-select"  style={{borderRadius: 30}} aria-label="Default select example">
                      <option selected>Pilih Tujuan</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{border: 'none'}}>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#berhasilFisik" style={{width: '100%', borderRadius: 30}}>Ajukan Peminjaman</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Modal Berhasil Ajukan Fisik*/}
      <div className="col">
        <div className="modal fade" id="berhasilFisik" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header" style={{borderBottom: 'none'}}>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                <h5 className="modal-title" style={{marginBottom: 15}}>Peminjaman Arsip Fisik Berhasil</h5>
                <img src="assets/images/checkmark.png" />
                <h6 className="modal-isi" style={{marginBottom: 0, marginTop: 15}}>Pengajuan peminjaman arsip fisik telah berhasil. Harap menunggu persetujuan.</h6>
              </div>
              <div className="modal-footer" style={{borderTop: 'none'}}>
                <button type="button" className="btn btn-primary" style={{width: '100%', borderRadius: 50}}>Oke</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>


	);
}

