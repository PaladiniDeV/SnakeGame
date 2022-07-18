import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        INSTRUCCIONES
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Instrucciones:</h2>
            <p>
              <h1 style={{color: 'red'}}> SNAKE LENGTH +1</h1>
              <h1 style={{color: 'green'}}> SNAKE LENGTH RESET POSITION</h1>
              <h1 style={{color: 'black'}}> SNAKE ?</h1>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CERRAR
            </button>
          </div>
        </div>
      )}
    </>
  );
}