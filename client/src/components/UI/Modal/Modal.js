import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
function Modal({ show, modalClosed, children }) {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
