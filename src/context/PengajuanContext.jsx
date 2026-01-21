import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const PengajuanContext = createContext();

export const usePengajuan = () => {
  const context = useContext(PengajuanContext);
  if (!context) {
    throw new Error('usePengajuan must be used within PengajuanProvider');
  }
  return context;
};

export const PengajuanProvider = ({ children }) => {
  const [pengajuanList, setPengajuanList] = useState([
    {
      id: 1,
      namaArsip: "PP Investasi",
      namaPetugas: "Dafa Maulana",
      jenis: "File",
      tipe: "Statis",
      tujuan: "Print",
      lemari: "1",
      rak: "1",
      nomor: "1",
      gedung: "A",
      lantai: "1",
      ruang: "1",
      folder: "1",
      waktuPengajuan: "1 Desember 2025 | 07:00:00 wib",
      waktuDiterima: "1 November 2025 | 10:30:00 wib",
      batasPeminjaman: "1 Desember 2025 | 18:30:00 wib",
      waktuPengembalian: null,
      status: "Disetujui",
      subStatus: "Sedang Dipinjam",
      sisaWaktu: "4 jam : 24 menit : 30 detik",
      alasan: null
    },
    {
      id: 2,
      namaArsip: "PP Investasi",
      namaPetugas: "Dafa Maulana",
      jenis: "File",
      tipe: "Statis",
      tujuan: "Print",
      lemari: "1",
      rak: "1",
      nomor: "1",
      gedung: "A",
      lantai: "1",
      ruang: "1",
      folder: "1",
      waktuPengajuan: "1 Desember 2025 | 07:00:00 wib",
      waktuDiterima: "1 November 2025 | 10:30:00 wib",
      batasPeminjaman: "1 Desember 2025 | 18:30:00 wib",
      waktuPengembalian: null,
      status: "Belum Dikembalikan",
      subStatus: "Sedang Dipinjam",
      sisaWaktu: "+4 jam : 24 menit : 30 detik",
      alasan: null
    },
    {
      id: 3,
      namaArsip: "PP Investasi",
      namaPetugas: "Dafa Maulana",
      jenis: "File",
      tipe: "Statis",
      tujuan: "Print",
      lemari: "1",
      rak: "1",
      nomor: "1",
      gedung: "A",
      lantai: "1",
      ruang: "1",
      folder: "1",
      waktuPengajuan: "1 Desember 2025 | 07:00:00 wib",
      waktuDiterima: null,
      batasPeminjaman: null,
      waktuPengembalian: null,
      status: "Menunggu Persetujuan",
      subStatus: null,
      sisaWaktu: null,
      alasan: null
    }
  ]);
  const [token, setToken] = useState(localStorage.getItem("token") || '');

  const [gedungs, setGedungs] = useState([]);
  const [floors, setFloors] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [cabinets, setCabinets] = useState([]);
  const [types, setTypes] = useState([]);
  const [semuaJenis, setSemuaJenis] = useState([]);
  const [categories, setCategories] = useState([]);
  const [names, setNames] = useState([]);
  const [shelves, setShelves] = useState([]);
  const [folders, setFolders] = useState([]);
  const fetchData = useCallback(async (endpoint, setter, authToken) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Fetch Gagal');
      setter(result);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error.message);
    }
  }, []);
  const getAllMasterData = useCallback((authToken) => {
    if (!authToken) return;
    fetchData('buildings', setGedungs, authToken);
    fetchData('floors', setFloors, authToken);
    fetchData('rooms', setRooms, authToken);
    fetchData('cabinets', setCabinets, authToken);
    fetchData('shelves', setShelves, authToken);
    fetchData('folders', setFolders, authToken);
    fetchData('tipe', setTypes, authToken);
    fetchData('jenis', setSemuaJenis, authToken);
    fetchData('kategori', setCategories, authToken);
    fetchData('names', setNames, authToken);
  }, [fetchData]);
  const addPengajuan = (data) => {
    const newPengajuan = {
      id: Date.now(),
      ...data,
      waktuPengajuan: new Date().toLocaleString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).replace(',', '|') + ' wib',
      waktuDiterima: null,
      batasPeminjaman: null,
      waktuPengembalian: null,
      status: "Menunggu Persetujuan",
      subStatus: null,
      sisaWaktu: null,
      alasan: null
    };
    setPengajuanList(prev => [...prev, newPengajuan]);
    return newPengajuan;
  };

  const updatePengajuan = (id, updates) => {
    setPengajuanList(prev =>
      prev.map(item => item.id === id ? { ...item, ...updates } : item)
    );
  };

  const deletePengajuan = (id) => {
    setPengajuanList(prev => prev.filter(item => item.id !== id));
  };
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      setToken(auth);
      getAllMasterData(auth);
    }
  }, [getAllMasterData]);
  const contextValue = useMemo(() => ({
    pengajuanList,
    types,
    gedungs,
    floors,
    rooms,
    cabinets,
    semuaJenis,
    shelves,
    folders,
    categories,
    names,
    token,
    addPengajuan: (data) => { /* logika add */ },
    updatePengajuan: (id, updates) => { /* logika update */ },
    deletePengajuan: (id) => { /* logika delete */ },
    refreshData: () => getAllMasterData(token)
  }), [pengajuanList, types, gedungs, floors, semuaJenis, rooms, names, cabinets, shelves, folders, token, getAllMasterData]);
  return (
    <PengajuanContext.Provider value={contextValue}>
      {children}
    </PengajuanContext.Provider>
  );
};