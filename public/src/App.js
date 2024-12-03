import React, { useState } from 'react';
import RowMahasiswa from './components/RowMahasiswa';
import RowTambahMahasiswa from './components/RowTambahMahasiswa';

// Data awal table mahasiswa
const ArrMahasiswas = [
  {
    nim :"18010245",
    nama: "Ricardo Milos",
    jurusan: "Teknik Informatika",
    asalProvinsi: "DKI Jakarta"
  },
  {
    nim : "19010214",
    nama: "Ambatukam",
    jurusan: "Sistem Informasi",
    asalProvinsi: "Sumatra Barat"
  },
  {
    nim :"20012345",
    nama:"Rusdi",
    jurusan: "Ilmu komputer",
    asalProvinsi: "Jawa Tengah"
  },
  {
    nim :"2001233",
    nama: "Andre",
    jurusan: "Ilmu komputer",
    asalProvinsi: "Kalimantan Barat"
  },
];


const App = () => {
  const [mahasiswas, setMahasiswas] = useState(ArrMahasiswas);

  return (
    <div className="container mt-5">

      <div className= "row mt-5">
        <div className="col">
          <h1 className="text-center">Tabel mahasiswa</h1>

          <table className="mt-4">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Asal Provinsi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                mahasiswas.map((mahasiswa) => 
                  <RowMahasiswa
                  key={mahasiswa.nim}
                  mahasiswa={mahasiswa}
                  />
                )
              }
              <RowTambahMahasiswa />
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App;