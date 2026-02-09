import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const PengajuanContext = createContext();

export const usePengajuan = () => {
  const context = useContext(PengajuanContext);
  if (!context) {
    throw new Error("usePengajuan must be used within PengajuanProvider");
  }
  return context;
};

export const PengajuanProvider = ({ children }) => {
  // --- States ---
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const role = localStorage.getItem("role");

  const [masterData, setMasterData] = useState({
    gedungs: [],
    types: [],
    semuaJenis: [],
    codes: [],
    categories: [],
    names: [],
    users: [],
    tujuans: [],
    pinjamans: [],
    arsips: [],
  });

  const [isEdit, setIsEdit] = useState(false);
  const [currentUuid, setCurrentUuid] = useState(null);
  const [formDataArsip, setFormDataArsip] = useState({
    file: null,
    name_uuid: null,
    tipe_arsip: null,
    judul_arsip: null,
    jenis_arsip: null,
    kategori_arsip: null,
    gedung_uuid: null,
    lantai_uuid: null,
    ruang_uuid: null,
    lemari_uuid: null,
    rak_uuid: null,
    folder_uuid: null,
    kode_arsip: null,
    keterangan: null,
  });

  // --- Helper Fetch ---
  const apiFetch = useCallback(async (endpoint, authToken) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/${endpoint}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || `Fetch ${endpoint} Gagal`);
    return result;
  }, []);

  // --- Core Fetch Function (Parallel) ---
  const getAllMasterData = useCallback(
    async (authToken) => {
      if (!authToken) return;

      try {
        // Menjalankan semua request secara paralel (Jauh lebih cepat)
        const [
          gedungs,
          types,
          jenis,
          codes,
          categories,
          names,
          users,
          tujuans,
          pinjamans,
          arsips,
        ] = await Promise.all([
          apiFetch("buildings", authToken),
          apiFetch("tipe", authToken),
          apiFetch("jenis", authToken),
          apiFetch("kode", authToken),
          apiFetch("kategori", authToken),
          apiFetch("names", authToken),
          apiFetch("users", authToken),
          apiFetch("tujuans", authToken),
          apiFetch("peminjamans", authToken),
          apiFetch("arsips", authToken),
        ]);

        setMasterData({
          gedungs,
          types,
          semuaJenis: jenis,
          codes,
          categories,
          names,
          users,
          tujuans,
          pinjamans,
          arsips,
        });
      } catch (error) {
        console.error("Error fetching master data:", error.message);
      }
    },
    [apiFetch],
  );

  // --- Derived State (Flattening Data) ---
  // Menggunakan useMemo agar proses looping gedung hanya jalan jika masterData.gedungs berubah
  const flattenedGedung = useMemo(() => {
    const data = {
      floors: [],
      rooms: [],
      cabinets: [],
      shelves: [],
      folders: [],
    };

    masterData.gedungs.forEach((g) => {
      g.floors?.forEach((f) => {
        data.floors.push(f);
        f.rooms?.forEach((r) => {
          data.rooms.push(r);
          r.cabinets?.forEach((c) => {
            data.cabinets.push(c);
            c.shelves?.forEach((s) => {
              data.shelves.push(s);
              s.folders?.forEach((fold) => data.folders.push(fold));
            });
          });
        });
      });
    });
    return data;
  }, [masterData.gedungs]);

  // --- Handlers ---
  const handleEdit = (item) => {
    setIsEdit(true);
    setCurrentUuid(item.uuid);
    setFormDataArsip({ ...item });
  };

  const handleDelete = async (item) => {
    if (
      !window.confirm(
        "Peringatan: Menghapus item ini akan menghapus semua sub-item!",
      )
    )
      return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/arsips/${item.uuid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) throw new Error("Gagal menghapus");
      alert("Berhasil menghapus data arsip");
      getAllMasterData(token); // Refresh data
    } catch (error) {
      console.error("Delete Gagal:", error.message);
    }
  };

  // --- Effects ---
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth && !token) {
      setToken(auth);
      const storedUser = localStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    }

    if (token) {
      getAllMasterData(token);
    }
  }, [token, getAllMasterData]);

  // --- Context Value ---
  const contextValue = useMemo(
    () => ({
      ...masterData,
      ...flattenedGedung,
      role,
      user,
      token,
      isEdit,
      setIsEdit,
      currentUuid,
      formDataArsip,
      setFormDataArsip,
      handleEdit,
      handleDelete,
      refreshData: () => getAllMasterData(token),
    }),
    [
      masterData,
      flattenedGedung,
      role,
      user,
      token,
      isEdit,
      currentUuid,
      formDataArsip,
      getAllMasterData,
    ],
  );

  return (
    <PengajuanContext.Provider value={contextValue}>
      {children}
    </PengajuanContext.Provider>
  );
};
