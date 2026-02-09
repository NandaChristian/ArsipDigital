import React from "react";
import DataArsip from "./DataArsip";
import BuildCard from "../base/BuildCard";
import { usePengajuan } from "../../context/PengajuanContext";
import { useNavigate } from "react-router-dom";

const BuildsComponent = () => {
  const { gedungs } = usePengajuan();
  const navigate = useNavigate();
  return (
    <DataArsip>
      {" "}
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3">
        {gedungs?.map((gedung) => {
          const totalRuang = gedung.floors.reduce((acc, floor) => {
            return acc + (floor.rooms ? floor.rooms.length : 0);
          }, 0);
          return (
            <div className="col" key={gedung.uuid}>
              <BuildCard gedung={gedung} totalRuang={totalRuang} />
            </div>
          );
        })}
      </div>
      <div className="my-2">
        <button
          onClick={() => navigate("/dataArsipStaff/detailFisikStaff")}
          className="w-100 btn btn-info"
          style={{
            background: "#0d6efd",
            color: "white",
            borderRadius: "30px",
            padding: "10px 0px",
          }}
        >
          Daftar Arsip
        </button>
      </div>
    </DataArsip>
  );
};

export default BuildsComponent;
