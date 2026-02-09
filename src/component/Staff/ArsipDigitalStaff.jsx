import { Link, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import AdminLayout from "../layouts/AdminLayout";


export default function ArsipDigitalStaff() {
  const navigate = useNavigate();
  const location = useLocation();

  const tab = location.pathname.includes("ArsipDigitalStaff") ? "ArsipDigitalStaff" : "Arsip Fisik";

  return (
    <AdminLayout>
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
                <li onClick={() => navigate("/dataArsipStaff")} className={`nav-item ${tab === "Arsip Fisik" ? "active" : ""}`} role="presentation" style={{ width: '50%', cursor: 'pointer' }}>
                  <div className="nav-link" data-bs-toggle="pill" href="#primary-pills-home" role="tab" aria-selected="true">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="tab-title">Arsip Fisik</div>
                    </div>
                  </div>
                </li>
                <li onClick={() => navigate("/dataArsipStaff/ArsipDigitalStaff")} className={`nav-item ${tab === "ArsipDigitalStaff" ? "active" : ""}`} role="presentation" style={{ width: '50%', cursor: 'pointer' }}>
                  <div className="nav-link active" data-bs-toggle="pill" href="#primary-pills-profile" role="tab" aria-selected="false">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="tab-title">Arsip Digital</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="user-box">
              <div className="col mb-3">
                <button type="button" className="btn-pengajuan px-5 pb-2 pt-2" data-bs-toggle="modal" data-bs-target="#modalDigital">Pengajuan Peminjaman</button>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
            <div className="col mb-4">
              <div className="card">
                <div className="gambar d-flex justify-content-center">
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Bank Indonesia</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <Link to="/dataArsipStaff/arsipDigitalStaff/detailDigitalStaff" className="link">
                            <div className="d-flex align-items-center">
                              <div>
                                <p className="mb-0 text-secondary">Arsip</p>
                                <h4 className="my-1 text-black">100</h4>
                              </div>
                              <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
                              </div>
                            </div>
                          </Link>
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
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">OJK</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <Link to="/dataArsipStaff/arsipDigitalStaff/detailDigitalStaff" className="link">
                            <div className="d-flex align-items-center">
                              <div>
                                <p className="mb-0 text-secondary">Arsip</p>
                                <h4 className="my-1 text-black">100</h4>
                              </div>
                              <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
                              </div>
                            </div>
                          </Link>
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
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">BPR</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Arsip</p>
                              <h4 className="my-1">100</h4>
                            </div>
                            <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
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
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Kemenkeu</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Arsip</p>
                              <h4 className="my-1">100</h4>
                            </div>
                            <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
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
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Bank Indonesia</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Arsip</p>
                              <h4 className="my-1">100</h4>
                            </div>
                            <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
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
                  <img src="/assets/images/Frame 139.png" className="card-img-top" style={{ width: 170, height: 138, marginTop: 15 }} alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">OJK</h5>
                </div>
                <ul className="list-group list-group-flush" style={{ borderTop: "none" }}>
                  <li className="list-group-item" style={{ border: 'none' }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Arsip</p>
                              <h4 className="my-1">100</h4>
                            </div>
                            <div className="text ms-auto font-35"><img src="/assets/images/file-archive.png" alt className="logo-arsip" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            {/* Modal Tombol Pengajuan Digital */}
            <div className="modal fade" id="modalDigital" tabIndex={-1} aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header" style={{ border: 'none' }}>
                    <h5 className="modal-title" style={{ paddingLeft: '15%' }}>Formulir Peminjaman Arsip Digital</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <img src="/assets/images/documents.png" style={{ width: 100, margin: 'auto', display: 'flex' }} />
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Nama Petugas</label>
                        <select className="form-select mb-3" style={{ borderRadius: 30 }} aria-label="Default select example">
                          <option selected>Pilih Petugas</option>
                          <option value={1}>Dafa Maulana | 07.00 - 13.00 Petugas Siap Membantu</option>
                          <option value={2}>Adam | 07.00 - 13.00 Petugas Sedang Melayani User Lain</option>
                          <option value={3}>Tegar Wisnu | 13.00 - 20.00 Petugas Masih Diluar Jam Kerja</option>
                        </select>
                      </div>
                      <div className="line" style={{ display: 'flex' }}>
                        <div className="mb-3" style={{ width: '100%', marginRight: 10 }}>
                          <label className="form-label">Kategori</label>
                          <select className="form-select mb-3" style={{ borderRadius: 30 }} aria-label="Default select example">
                            <option selected>Pilih Kategori</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="mb-3" style={{ width: '100%', marginRight: 10 }}>
                          <label className="form-label">Sub Kategori</label>
                          <select className="form-select mb-3" style={{ borderRadius: 30 }} aria-label="Default select example">
                            <option selected>Pilih Sub Kategori</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                          </select>
                        </div>
                        <div className="mb-3" style={{ width: '100%', marginRight: 10 }}>
                          <label className="form-label">Kode</label>
                          <input type className="form-control" style={{ borderRadius: 30 }} placeholder="Kode Arsip" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Nama Arsip</label>
                        <select className="form-select mb-3" style={{ borderRadius: 30 }} aria-label="Default select example">
                          <option selected>Nama Arsip</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Kode</label>
                        <input type className="form-control" style={{ borderRadius: 30 }} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tipe Arsip</label>
                        <input type="text" className="form-control" style={{ borderRadius: 30 }} />
                      </div>
                      <label className="form-label">Jenis Arsip</label>
                      <div className="line-check" style={{ display: 'flex' }}>
                        <div className="form-check" style={{ marginRight: 10 }}>
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">Surat</label>
                        </div>
                        <div className="form-check" style={{ marginRight: 10 }}>
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">Laporan</label>
                        </div>
                        <div className="form-check" style={{ marginRight: 10 }}>
                          <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">File</label>
                        </div>
                      </div>
                      <label className="form-label">Jenis Arsip otomatis muncul setelah memilih arsip</label>
                      <div className="mb-3">
                        <label className="form-label">Pilih Tujuan</label>
                        <select className="form-select mb-3" style={{ borderRadius: 30 }} aria-label="Default select example">
                          <option selected>Pilih Tujuan</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer" style={{ border: 'none' }}>
                    <button type="button" className="btn btn-primary" style={{ width: '100%', borderRadius: 30 }} data-bs-toggle="modal" data-bs-target="#berhasilDigital">Ajukan Peminjaman</button>
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
                  <div className="modal-header" style={{ borderBottom: 'none' }}>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <h5 className="modal-title" style={{ marginBottom: 15 }}>Peminjaman Arsip Digital Berhasil</h5>
                    <img src="/assets/images/checkmark.png" />
                    <h6 className="modal-isi" style={{ marginBottom: 0, marginTop: 15 }}>Pengajuan peminjaman arsip digital telah berhasil. Harap menunggu persetujuan.</h6>
                  </div>
                  <div className="modal-footer" style={{ borderTop: 'none' }}>
                    <button type="button" className="btn btn-primary" style={{ width: '100%', borderRadius: 50 }}>Oke</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}