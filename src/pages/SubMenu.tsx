/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, FormEvent } from 'react';
import {ContentHeader} from '@components';

import "@fontsource/anek-telugu";
import { useCallback, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "@stitches/react";
import * as _ from "radash";

import { Modal } from '@app/components/modals';

import { Column, IElement } from "./../components/drag-n-drop/column";
import { stringify } from 'uuid';

const COLUMNS = ["Backlog", "In Progress", "In Review", "Done"];
export const DEFAULT_COLUMN = "backlog";

const DEFAULT_DATA_STATE: IElement[] = [
  {
    id: _.uid(6),
    content: "kerjaan 1",
    deadline: "05-2023",
    column: DEFAULT_COLUMN,
  },
  {
    id: _.uid(6),
    content: "kerjaan 2",
    deadline: "05-2023",
    column: DEFAULT_COLUMN,
  },
];




const SubMenu = () => {
  const [id,setId] = React.useState("")
  const [content,setContent] = React.useState("")
  const [deadline,setdeadline] = React.useState("")

  const handleKerjaan = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleDeadline = (event: ChangeEvent<HTMLInputElement>) => {
    setdeadline(event.target.value);
  };


  const handleSubmitTambah = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const randomId = Math.floor(Math.random() * 9999)


    const jobs = [...data,   {
      id: _.uid(6),
      content: content,
      deadline: deadline,
      column: DEFAULT_COLUMN,
    }];
    setData(jobs);
    setContent('');
    setdeadline('');
    toggleModalTambah()
  };

  const [isModalTambah, setModalStateTambah] = React.useState(false);
  const toggleModalTambah = () => setModalStateTambah(!isModalTambah);




  
  const addItem = () => {
    // Create a copy of the array and add a new item
    const jobs = [...data,   {
      id: _.uid(6),
      content: "kerjaan 3",
      deadline: "05-2023",
      column: DEFAULT_COLUMN,
    }];

    // Update the state with the new array
    setData(jobs);
  };
  const [data, setData] = useState<IElement[]>(DEFAULT_DATA_STATE);


  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data];

      const updatedState = deepCopy.map((elm): IElement => {
        if (elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column;
          return { ...elm, column };
        }
        return elm;
      });

      setData(updatedState);
    },
    [data, setData]
  );
  const MainWrapper = styled("div", {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 40,
    fontFamily: "Anek Telugu",
    height: "90vh",
  });
  return (
    
    <div>
      <ContentHeader title="SubMenu Page" />
      <div>
      <Modal
          title={'Tambah Barang'}
          isOpen={isModalTambah}
          onClose={toggleModalTambah}
        >
          
        <form onSubmit={handleSubmitTambah}>
          <div className="form-group">
            <label className="form-label" htmlFor="namakerjaan">Nama pekerjaan:</label>
            <input
              className="form-control"
              type="text"
              id="namaKerjaan"
              value={content}
              onChange={handleKerjaan}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="deadline">deadline :</label>
            <input
              className="form-control"
              type="text"
              id="jenis"
              value={deadline}
              onChange={handleDeadline}
            />
          </div>

        </form>

        <br></br>
          <h4 className='text-center'>apakah anda ingin menambahkanya?</h4>
          <div className="d-flex justify-content-center">
            <button 
              type="button"
              className="btn btn-primary mr-4"
              onClick={handleSubmitTambah}
              
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
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>

            </div>
            <div className="card-body">
            <button onClick={toggleModalTambah}>Add Item</button>
            <DndContext onDragEnd={handleOnDragEnd}>
              <MainWrapper>
                {COLUMNS.map((column, columnIndex) => (
                  <Column
                    key={`column-${columnIndex}`}
                    heading={column}
                    elements={_.select(
                      data,
                      (elm) => elm,
                      (f) => f.column === _.camel(column)
                    )}
                  />
                ))}
              </MainWrapper>
            </DndContext>
             
            </div>
            <div className="card-footer">Footer</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubMenu;
