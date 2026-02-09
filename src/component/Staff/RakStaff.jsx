import { Link, useParams } from "react-router-dom";
import React from "react";
import { PengajuanContext } from "../../context/PengajuanContext";
import DataArsip from "../Petugas/DataArsip";

export default function RakStaff() {
  const { uuid } = useParams();
  const { shelves, arsips } = React.useContext(PengajuanContext);
  const [shelfBuild, setShelfBuild] = React.useState([]);
  const [folders, setFolders] = React.useState([]);
  function handleChangeShelf(uuid) {
    const folderFilter = shelves.filter((shelf) => shelf.uuid === uuid);
    setFolders(folderFilter);
  }
  React.useEffect(() => {
    if (shelves) {
      const filtered = shelves.filter((shelf) => shelf.cabinet_uuid === uuid);
      const filterFolder = shelves.filter(
        (shelf) => shelf.uuid === filtered[0].uuid,
      );
      setShelfBuild(filtered);
      setFolders(filterFolder);
    }
  }, [shelves]);
  return (
    <DataArsip>
      <div className="row">
        <div className="col-12 col-lg-3">
          <div className="card">
            <div className="card-body">
              <h5 className="my-2">Daftar Rak</h5>
              <div className="fm-menu">
                <div className="list-group list-group-flush">
                  {shelfBuild?.map((shelf) => (
                    <button
                      onClick={() => handleChangeShelf(shelf.uuid)}
                      className="list-group-item py-2"
                    >
                      <span>{shelf.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <div className="card">
            <div className="card-body">
              <div className="row mt-1">
                {folders[0]?.folders.map((folder) => {
                  const filterArsip = arsips?.filter(
                    (arsip) => arsip.folder_uuid == folder.uuid,
                  );
                  return (
                    <div className="col-12 col-lg-4">
                      <div className="card shadow-none border radius">
                        <div className="card-body">
                          <div className="gambar d-flex justify-content-center">
                            <img
                              src="/assets/images/Frame 139.png"
                              className="card-img-top"
                              style={{ width: 170, height: 138, marginTop: 15 }}
                              alt="..."
                            />
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">{folder.name}</h5>
                          </div>
                          <ul className="list-group list-group-flush">
                            <Link
                              to={`/dataArsipStaff/detailFisikStaff/${folder.uuid}`}
                              className="link"
                            >
                              <li
                                className="list-group-item"
                                style={{ border: "none", padding: 0 }}
                              >
                                <div className="col">
                                  <div
                                    className="card radius-10 shadow-none"
                                    style={{ border: "1px solid", margin: 0 }}
                                  >
                                    <div className="card-body">
                                      <div className="d-flex align-items-center">
                                        <div>
                                          <p className="mb-0 text-secondary">
                                            Arsip
                                          </p>
                                          <h4 className="my-1">
                                            {filterArsip?.length}
                                          </h4>
                                        </div>
                                        <div className="text ms-auto font-35">
                                          <img
                                            src="/assets/images/file-archive.png"
                                            width={24}
                                            height={24}
                                            alt
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
                    </div>
                  );
                })}
              </div>
              {/*end row*/}
            </div>
          </div>
        </div>
      </div>
    </DataArsip>
  );
}
