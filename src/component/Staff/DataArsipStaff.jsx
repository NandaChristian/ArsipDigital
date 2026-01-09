import { Link } from "react-router-dom";

export default function DataArsipStaff () {
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
        <div className="search-bar flex-grow-1">
          <h4>Data Arsip</h4>
        </div>
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
            <button type="button" className="btn btn-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#modalFisik">Pengajuan Peminjaman</button>
          </div>
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
            <ul className="list-group list-group-flush">
              <Link to="/dataArsipStaff/lantai">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipStaff/ruang">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              </Link>
              <Link to="/dataArsipStaff/arsip">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Lantai</p>
                          <h4 className="my-1">5</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Ruang</p>
                          <h4 className="my-1">10</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/building.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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


    {/* arsip Digital */}
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
            <button type="button" className="btn btn-primary px-5 radius-30" data-bs-toggle="modal" data-bs-target="#modalDigital">Pengajuan Peminjaman</button>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        <div className="col">
          <div className="card">
            <div className="gambar d-flex justify-content-center">
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Bank Indonesia</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">OJK</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">BPR</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Kemenkeu</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Bank Indonesia</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
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
              <img src="assets/images/Frame 139.png" className="card-img-top" style={{width: 170, height: 138, marginTop: 15}} alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">OJK</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" style={{border: 'none'}}>
                <div className="col">
                  <div className="card radius-10 shadow-none" style={{border: '1px solid'}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="mb-0 text-secondary">Arsip</p>
                          <h4 className="my-1">100</h4>
                        </div>
                        <div className="text ms-auto font-35"><img src="assets/images/file-archive.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>


        {/* Modal Tombol Pengajuan Fisik */}
        <div className="modal fade" id="modalFisik" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header" style={{border: 'none'}}>
                <h5 className="modal-title">Formulir Peminjaman Arsip Fisik</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <img src="assets/images/documents.png" />
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama Petugas</label>
                    <select className="form-select mb-3 radius-30" aria-label="Default select example">
                      <option selected>Nama Petugas</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Nama Arsip</label>
                    <select className="form-select mb-3 radius-30" aria-label="Default select example">
                      <option selected>Nama Arsip</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="line" style={{display: 'flex'}}>
                    <div className="mb-3">
                      <label className="form-label">Lemari</label>
                      <select className="form-select mb-3 radius-30" aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Rak</label>
                      <select className="form-select mb-3 radius-30" aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Nomor</label>
                      <select className="form-select mb-3 radius-30" aria-label="Default select example">
                        <option selected />
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tipe Arsip</label>
                    <input type="text" className="form-control radius-30" />
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
                  <div className="mb-3">
                    <label className="form-label">Pilih Tujuan</label>
                    <select className="form-select mb-3 radius-30" aria-label="Default select example">
                      <option selected>Pilih Tujuan</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{border: 'none'}}>
                <button type="button" className="btn btn-primary radius-30" data-bs-toggle="modal" data-bs-target="#berhasilFisik" style={{width: '100%'}}>Ajukan Peminjaman</button>
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


       {/* Modal Tombol Pengajuan Digital */}
      <div className="modal fade" id="modalDigital" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header" style={{border: 'none'}}>
              <h5 className="modal-title">Formulir Peminjaman Arsip Digital</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <img src="assets/images/documents.png" />
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama Petugas</label>
                  <select className="form-select mb-3 radius-30" aria-label="Default select example">
                    <option selected>Pilih Petugas</option>
                    <option value={1}>Dafa Maulana | 07.00 - 13.00 Petugas Siap Membantu</option>
                    <option value={2}>Adam | 07.00 - 13.00 Petugas Sedang Melayani User Lain</option>
                    <option value={3}>Tegar Wisnu | 13.00 - 20.00 Petugas Masih Diluar Jam Kerja</option>
                  </select>
                </div>
                <div className="line" style={{display: 'flex'}}>
                  <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <select className="form-select mb-3 radius-30" aria-label="Default select example">
                      <option selected>Pilih Kategori</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Sub Kategori</label>
                    <select className="form-select mb-3 radius-30" aria-label="Default select example">
                      <option selected>Pilih Sub Kategori</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kode</label>
                    <input type className="form-control radius-30" placeholder="Kode Arsip" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nama Arsip</label>
                  <select className="form-select mb-3 radius-30" aria-label="Default select example">
                    <option selected>Nama Arsip</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Kode</label>
                  <input type className="form-control radius-30" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipe Arsip</label>
                  <input type="text" className="form-control radius-30" />
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
                <div className="mb-3">
                  <label className="form-label">Pilih Tujuan</label>
                  <select className="form-select mb-3 radius-30" aria-label="Default select example">
                    <option selected>Pilih Tujuan</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{border: 'none'}}>
              <button type="button" className="btn btn-primary radius-30" data-bs-toggle="modal" data-bs-target="#berhasilDigital" style={{width: '100%'}}>Ajukan Peminjaman</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      {/* Modal Berhasil Ajukan Digital*/}
      <div className="modal fade" id="berhasilDigital" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header" style={{borderBottom: 'none'}}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
              <h5 className="modal-title" style={{marginBottom: 15}}>Peminjaman Arsip Digital Berhasil</h5>
              <img src="assets/images/checkmark.png" />
              <h6 className="modal-isi" style={{marginBottom: 0, marginTop: 15}}>Pengajuan peminjaman arsip digital telah berhasil. Harap menunggu persetujuan.</h6>
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

