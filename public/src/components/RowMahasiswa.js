const RowMahasiswa = (props) => {
  return (
    <tr>
      <td>{props.mahasiswa.nim}</td>
      <td>{props.mahasiswa.nama}</td>
      <td>{props.mahasiswa.jurusan}</td>
      <td>{props.mahasiswa.asalProvinsi}</td>
      <td>
        <button className="btn btn-secondary me-2">Edit</button>
        <button className="btn btn-danger">hapus</button>
      </td>
    </tr>
  )
}

export default RowMahasiswa;