import React from "react";
import { Link, useParams } from "react-router-dom";
import { PengajuanContext } from "../../context/PengajuanContext";
import Navigation from "../Navigation";
import AdminLayout from "../layouts/AdminLayout";
import DataArsip from "../Petugas/DataArsip";

export default function RuangStaff() {
  const { uuid } = useParams();
  const { rooms } = React.useContext(PengajuanContext);
  const [roomBuild, setRoomBuild] = React.useState([]);

  React.useEffect(() => {
    if (rooms) {
      const filtered = rooms.filter((room) => room.floor_uuid === uuid);
      setRoomBuild(filtered);
    }
  }, [rooms]);
  return (
    <DataArsip>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        {roomBuild?.map((room) => (
          <div className="col">
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
                <h5 className="card-title">{room.name}</h5>
                {/* <p className="card-text">Training &amp; Development</p> */}
              </div>
              <ul
                className="list-group list-group-flush"
                style={{ borderTop: "none" }}
              >
                <Link
                  to={`/dataArsipStaff/ruangStaff/lemariStaff/${room.uuid}`}
                  className="link"
                >
                  <li className="list-group-item" style={{ border: "none" }}>
                    <div className="col">
                      <div className="card radius-10 shadow-none">
                        <div className="card-body-arsip">
                          <div className="d-flex align-items-center">
                            <div>
                              <p className="mb-0 text-secondary">Lemari</p>
                              <h4 className="my-1">{room.cabinets.length}</h4>
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
