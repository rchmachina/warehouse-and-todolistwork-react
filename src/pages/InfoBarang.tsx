/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, FormEvent } from 'react';
import {ContentHeader} from '@components';
import { barang,namaBarang } from '@app/assets/infoBarang';

import { Modal } from '@app/components/modals';

import 'react-datepicker/dist/react-datepicker.css';


const Warehouse: React.FC = () => {

 

  const [namaBarang, setNamaBarang] = React.useState('');
  const [jenis, setJenis] = React.useState('');
  const [tanggal, setTanggal] = React.useState('');
  const [jumlah, setJumlah] = React.useState('');
  const [theBarang,setBarang] = React.useState(barang)


  const handleNamaBarangChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNamaBarang(event.target.value);
  };

  const handleJenisChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJenis(event.target.value);
  };

  const handleTanggalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTanggal(event.target.value);
  };
  const handleJumlah = (event: ChangeEvent<HTMLInputElement>) => {
    setJumlah(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 
    const newBarang = [...theBarang,{jumlah: Number(jumlah), id:"10",date:jenis,namaBarang:namaBarang,tipe:jenis,checked:"fas fa-question"}]
    console.log(newBarang)
    setBarang(newBarang)
    setNamaBarang('');
    setJenis('');
    setTanggal('');
    setJumlah('');
    toggleModalTambah()
  };



  
  const [isModalTambah, setModalStateTambah] = React.useState(false);
  const [isModalHapus, setModalStateHapus] = React.useState(false);


  const toggleModalTambah = () => setModalStateTambah(!isModalTambah);
  
  const toggleModalHapus = () => setModalStateHapus(!isModalHapus);



  
  return (
    <div>
      <div>
        <Modal
          title={'Tambah Barang'}
          isOpen={isModalTambah}
          onClose={toggleModalTambah}
        >
          
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="namaBarang">Nama Barang:</label>
            <input
              className="form-control"
              type="text"
              id="namaBarang"
              value={namaBarang}
              onChange={handleNamaBarangChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="jenis">Jenis:</label>
            <input
              className="form-control"
              type="text"
              id="jenis"
              value={jenis}
              onChange={handleJenisChange}
            />
          </div>

          <div className="form-group mb-1">
            <label className="form-label" htmlFor="tanggal">Tanggal:</label>
            <input
              className="form-control"
              type="date"
              id="tanggal"
              value={tanggal}
              onChange={handleTanggalChange}
            />
          </div>
          <div className="form-group mb-1">
            <label className="form-label" htmlFor="jumlah">jumlah:</label>
            <input
              className="form-control"
              type="number"
              id="jumlah"
              value={jumlah}
              onChange={handleJumlah}
            />
          </div>

        </form>



          <br></br>
          <h4 className='text-center'>apakah anda ingin menambahkanya?</h4>
          <div className="d-flex justify-content-center">
            <button 
              type="button"
              className="btn btn-primary mr-4"
              onClick={handleSubmit}
              
            >
              Ya!
            </button> &nbsp;
            <button 
              type="button"
              className="btn btn-danger"
              onClick={toggleModalTambah}
            >
              Hapus
            </button>
          </div>
          
        </Modal>
        <Modal
          title={'hapus Barang'}
          isOpen={isModalHapus}
          onClose={toggleModalHapus}
        >
          
          
          <h4 className='text-center'>apakah anda ingin menghapusnya?</h4>
          <div className="d-flex justify-content-center">
            <button 
              type="button"
              className="btn btn-primary mr-4"
              onClick={toggleModalHapus}
              
            >
              Ya!
            </button> &nbsp;
            <button 
              type="button"
              className="btn btn-danger"
              onClick={toggleModalHapus}
            >
              Hapus
            </button>
          </div>
          
        </Modal>
      </div>
      <ContentHeader title="Warehouse" />
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">semua barang</h3>
              <div className="card-tools">
                <button 
                  type="button"
                  className="btn  btn-primary"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                  onClick={toggleModalTambah}
                >
                 tambah barang
                </button>
              </div>
            </div>
            <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">date</th>
                  <th scope="col">nama barang</th>
                  <th scope="col">in/out</th>
                  <th scope="col">jumblah</th>

                  <th scope="col">dicheck</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>

              {theBarang.map((itemBarang: namaBarang) => (                  
                <tr>
                  <td>{itemBarang.date}</td>
                  <td>{itemBarang.namaBarang}</td>
                  <td>{itemBarang.tipe}</td>
                  <td>{itemBarang.jumlah}</td>
                  <td><i className={`${itemBarang.checked}`} /></td>
                  <td>
                  <button type="button" className="btn btn-success">Edit</button>
                  &nbsp;
                  <button type="button" className="btn btn-danger"
                    data-widget="collapse"
                    data-toggle="tooltip"
                    title="Collapse"
                    onClick={toggleModalHapus}>Delete</button>
                  </td>
                </tr>
                
                 
                  ))}
              </tbody>
            </table>

            </div>
            <div className="card-footer">Total barang = {theBarang.length}</div>
          </div>
        </div>

        <br/>

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Barang masuk</h3>
            </div>
            <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">date</th>
                  <th scope="col">nama barang</th>
                  <th scope="col">in/out</th>
                  <th scope="col">dicheck</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>

              {theBarang.map((itemBarang: namaBarang) => (

                <>    
                
                {itemBarang.tipe === "masuk" &&
                
                <tr>
                  <td>{itemBarang.date}</td>
                  <td>{itemBarang.namaBarang}</td>
                  <td>{itemBarang.tipe}</td>
                  <td><i className={`${itemBarang.checked}`} /></td>
                  <td> 
                    <button type="button" className="btn btn-success">Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                }
              
 
                </>
                  ))}
              </tbody>
            </table>

            </div>
            <div className="card-footer">Total barang </div>
          </div>
        </div>
        <br/>

        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Barang keluar</h3>

            </div>
            <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">date</th>
                  <th scope="col">nama barang</th>
                  <th scope="col">in/out</th>
                  <th scope="col">dicheck</th>
                  <th scope="col">update</th>
                </tr>
              </thead>
              <tbody>

              {theBarang.map((itemBarang: namaBarang) => (

                <>    
                
                {itemBarang.tipe === "keluar" &&
                <tr>
                  <td>{itemBarang.date}</td>
                  <td>{itemBarang.namaBarang}</td>
                  <td>{itemBarang.tipe}</td>
                  <td><i className={`${itemBarang.checked}`} /></td>
                  <td> 
                    <button type="button" className="btn btn-success">Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                }
              
 
                </>
                  

                
                 
                  ))}
              </tbody>
            </table>

            </div>
            <div className="card-footer">Total barang</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Warehouse;
