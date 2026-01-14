import { Link } from "react-router-dom";

export default function DataMaster() {
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
            <Link to="/dashboardPetugas">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/dataUserPetugas">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Data User</div>
            </Link>
          </li>
          <li>
            <Link to="/dataArsipPetugas">
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
            <Link to="/approvalPetugas">
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
        <div className="d-flex align-items-center">
          <div className="search-bar flex-grow-1 d-flex align-items-center" style={{marginBottom: 10}}>
            <h4 style={{marginBottom: 0}}>Data Master</h4>
          </div>
        </div>
      </div>
      <div className="row d-flex flex-nowrap">
        <div className="col-12 col-lg-2" style={{width: '22%'}}>
          <div className="card">
            <div className="card-body">
              <div className="col d-flex justify-content-center">
                <button type="button" className="btn btn-primary px-4 mb-3 radius-30" data-bs-toggle="modal" data-bs-target="#tambahUser">Tambah <img src="assets/images/plus.png" width={20} height={20} /></button>
              </div>
              <div>
                <h6 className="my-2" style={{textAlign: 'center', whiteSpace: 'nowrap'}}>Kategori Data Master</h6>
              </div>
              <div className="fm-menu mt-3">
                <div className="list-group list-group-flush"> 
                  <a href="javascript:;" className="list-group-item py-2"><span>Jenis Arsip</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Kategori</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Sub Kategori</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Gedung</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Lantai</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Ruang</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Lemari</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Rak</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Folder</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Tujuan</span></a>
                  <a href="javascript:;" className="list-group-item py-2"><span>Kode Arsip</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers-list mb-3" style={{width: '78%'}}>
          <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{marginBottom: 15}}>
            <div className="kiri" style={{display: 'flex', alignItems: 'center'}}>
              <div className>
                <img src="assets/images/stackfiles.png" width={60} height={50} alt />
              </div>
              <div className="ms-3">
                <h6 className="mb-1 font-14">Surat</h6>
              </div>
            </div>
            <div className="kanan" style={{display: 'flex'}}>
              <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                <div className>
                  <h7 className="mb-1">Aksi:</h7> 
                </div>
                <div className="w-45">
                  <button type="button" className="btn btn-primary radius-30" style={{width: '100%'}}><img src="assets/images/edit.png" alt width="15px" height="15px" style={{marginRight: 8}} />Edit</button>
                </div>	
                <div className="w-45">
                  <button type="button" className="btn btn-danger radius-30" style={{width: '100%'}}><img src="assets/images/hapus.png" width="15px" height="15px" style={{marginRight: 8}} alt />Hapus</button>
                </div>
              </div>			
            </div>
          </div>		
          <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{marginBottom: 15}}>
            <div className="kiri" style={{display: 'flex', alignItems: 'center'}}>
              <div className>
                <img src="assets/images/stackfiles.png" width={60} height={50} alt />
              </div>
              <div className="ms-3">
                <h6 className="mb-1 font-14">Laporan</h6>
              </div>
            </div>
            <div className="kanan" style={{display: 'flex'}}>
              <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                <div className>
                  <h7 className="mb-1">Aksi:</h7> 
                </div>
                <div className="w-45">
                  <button type="button" className="btn btn-primary radius-30" style={{width: '100%'}}><img src="assets/images/edit.png" alt width="15px" height="15px" style={{marginRight: 8}} />Edit</button>
                </div>	
                <div className="w-45">
                  <button type="button" className="btn btn-danger radius-30" style={{width: '100%'}}><img src="assets/images/hapus.png" width="15px" height="15px" style={{marginRight: 8}} alt />Hapus</button>
                </div>
              </div>			
            </div>
          </div>		
          <div className="customers-list-item d-flex align-items-center justify-content-between p-3 cursor-pointer bg-white radius-10" style={{marginBottom: 15}}>
            <div className="kiri" style={{display: 'flex', alignItems: 'center'}}>
              <div className>
                <img src="assets/images/stackfiles.png" width={60} height={50} alt />
              </div>
              <div className="ms-3">
                <h6 className="mb-1 font-14">File</h6>
              </div>
            </div>
            <div className="kanan" style={{display: 'flex'}}>
              <div className="d-flex align-items-center pb-0 pt-0 gap-3">
                <div className>
                  <h7 className="mb-1">Aksi:</h7> 
                </div>
                <div className="w-45">
                  <button type="button" className="btn btn-primary radius-30" style={{width: '100%'}}><img src="assets/images/edit.png" alt width="15px" height="15px" style={{marginRight: 8}} />Edit</button>
                </div>	
                <div className="w-45">
                  <button type="button" className="btn btn-danger radius-30" style={{width: '100%'}}><img src="assets/images/hapus.png" width="15px" height="15px" style={{marginRight: 8}} alt />Hapus</button>
                </div>
              </div>			
            </div>
          </div>		
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
