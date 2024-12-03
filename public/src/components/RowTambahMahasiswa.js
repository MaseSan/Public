const RowTambahMahasiswa = () => {
  return (
    <tr>
                <td colSpan="5">
                  <form>
                    <div className="row row-cols-5 g-3">
                      <div className="col">
                        <input type="text" className="form-control" name="nim" placeholder="00000000"/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" name="nama" placeholder="Fulan Fulan"/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" nam="jurusan" placeholder="Jurusan"/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" name="provinsi" placeholder="DKI Jakarta"/>
                      </div>
                      <div className="col">
                        <button type="submit" className="btn btn-primary" >Tambah</button>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
  )
}

export default RowTambahMahasiswa;