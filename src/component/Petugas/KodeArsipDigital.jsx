import React from "react";
import ArsipDigitalPetugas from "./ArsipDigitalPetugas";
import { PengajuanContext } from "../../context/PengajuanContext";
import { Link } from "react-router-dom";

const KodeArsipDigital = () => {
  const { names, codes, arsips } = React.useContext(PengajuanContext);
  return (
    <ArsipDigitalPetugas>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        {codes?.map((code) => {
          const filterArsip = arsips.filter(
            (arsip) => arsip.kode_arsip == code.uuid,
          );
          return (
            <div className="col mb-4">
              <div className="card">
                <div className="gambar d-flex justify-content-center">
                  <img
                    src="/assets/images/Frame 139.png"
                    className="card-img-top"
                    style={{ width: 170, height: 138, marginTop: 15 }}
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{code.kode}</h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ borderTop: "none" }}
                >
                  <li className="list-group-item" style={{ border: "none" }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <Link
                            to={`/dataArsipStaff/detailArsipDigital/${code.uuid}`}
                          >
                            <div className="d-flex align-items-center">
                              <div>
                                <p className="mb-0 text-secondary">Arsip</p>
                                <h4 className="my-1">{filterArsip.length}</h4>
                              </div>
                              <div className="text ms-auto font-35">
                                <img
                                  src="/assets/images/file-archive.png"
                                  alt
                                  className="logo-arsip"
                                />
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
          );
        })}
      </div>
    </ArsipDigitalPetugas>
  );
};

export default KodeArsipDigital;
