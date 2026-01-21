import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul className="metismenu p-3" id="menu">
            <h6 className="ms-3 mb-3">MAIN MENU</h6>
            <li>
                <Link to="/dashboardPetugas" className="link">
                    <div className="parent-icon">
                        <img src="/assets/images/house.png" alt="Dashboard" />
                    </div>
                    <div className="menu-title">Dashboard</div>
                </Link>
            </li>
            {/* <li>
            <Link to="/dataUserPetugas" className="link">
              <div className="parent-icon">
                <img src="/assets/images/house.png" alt="Dashboard" />
              </div>
              <div className="menu-title">Data User</div>
            </Link>
          </li> */}
            <li>
                <Link to="/dataArsipPetugas" className="link">
                    <div className="parent-icon">
                        <img src="/assets/images/clipboard-list.png" alt="Data Arsip Petugas" />
                    </div>
                    <div className="menu-title">Data Arsip</div>
                </Link>
            </li>
            <li>
                <Link to="/dataMaster/main" className="link">
                    <div className="parent-icon">
                        <img src="/assets/images/clipboard-list.png" alt="Data Master" />
                    </div>
                    <div className="menu-title">Data Master</div>
                </Link>
            </li>
            <li>
                <Link to="/approvalPetugas" className="link">
                    <div className="parent-icon">
                        <img src="/assets/images/history.png" alt="Approval" />
                    </div>
                    <div className="menu-title">Approval</div>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation