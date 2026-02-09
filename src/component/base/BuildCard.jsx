import React from "react";
import { Link } from "react-router-dom";

const BuildCard = ({ gedung, totalRuang }) => {
  return (
    <Link to={`/dataArsipStaff/lantaiStaff/${gedung.uuid}`} className="link">
      <div className="card">
        <div className="gambar d-flex justify-content-center">
          <img
            src="/assets/images/block.png"
            className="card-img-top"
            style={{ width: 104, height: 146, marginTop: 15 }}
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{gedung.name}</h5>
        </div>
        <ul
          className="list-group list-group-flush"
          style={{ borderTop: "none" }}
        >
          {/* <Link to={`/dataArsipStaff/lantaiStaff/${gedung.uuid}`} className="link"> */}
          <li className="list-group-item" style={{ border: "none" }}>
            <div className="col">
              <div className="card radius-10 shadow-none">
                <div className="card-body-arsip">
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="mb-0 text-secondary">Lantai</p>
                      <h4 className="my-1">{gedung.floors.length}</h4>
                    </div>
                    <div className="text ms-auto font-35">
                      <img
                        src="assets/images/building.png"
                        alt
                        className="logo-arsip"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default BuildCard;
