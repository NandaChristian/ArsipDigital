import { Link, useParams } from "react-router-dom";
import React from "react";
import { PengajuanContext } from "../../context/PengajuanContext";
import DataArsip from "../Petugas/DataArsip";

export default function LemariStaff() {
  const { uuid } = useParams();
  const { cabinets } = React.useContext(PengajuanContext);
  const [cabinetBuild, setCabinetBuild] = React.useState([]);

  React.useEffect(() => {
    if (cabinets) {
      const filtered = cabinets.filter((cabinet) => cabinet.room_uuid === uuid);
      setCabinetBuild(filtered);
    }
  }, [cabinets]);
  return (
    <DataArsip>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        {cabinetBuild?.map((cabinet) => (
          <div key={cabinet.uuid} className="col">
            <div className="card">
              <div className="gambar d-flex justify-content-center">
                <img
                  src="/assets/images/rak.png"
                  className="card-img-top"
                  style={{ width: 104, height: 146, marginTop: 15 }}
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{cabinet.name}</h5>
              </div>
              <ul
                className="list-group list-group-flush"
                style={{ borderTop: "none" }}
              >
                <Link
                  to={`/dataArsipStaff/lemariStaff/rakStaff/${cabinet.uuid}`}
                  className="link"
                >
                  <li className="list-group-item" style={{ border: "none" }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Rak</p>
                              <h4 className="my-1">{cabinet.shelves.length}</h4>
                            </div>
                            <div className="text ms-auto font-35">
                              <img
                                src="/assets/images/building.png"
                                alt
                                className="logo-arsip"
                              />
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
        ))}
      </div>
    </DataArsip>
  );
}
