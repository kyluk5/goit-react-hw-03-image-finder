import React from "react";
import "./Modal.css";

const Modal = ({ info, closeModal }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={info} alt="" />
      </div>
    </div>
  );
};

export default Modal;
