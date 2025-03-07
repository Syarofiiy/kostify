import React, { useContext, useState } from "react";
import { GlobalContext } from "../context";
import "./Modal.css";

const Modal = ({ isOpen, onClose, article }) => {
  const user = useContext(GlobalContext);
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Match the duration of the modalClose animation
  };

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isClosing ? "closing" : ""}`}>
        <button className="modal-close" onClick={handleClose}>
          &times;
        </button>
        <img className="modal-image" src={article.image} alt={article.title} />
        <h2>{article.title}</h2>
        <p>Harga: {article.price}</p>
        <p>Sisa kamar: {article.room}</p>
        <p>{article.description}</p>
        <p>Dikelola oleh: {user.username}</p>
        <h3>Fitur-fitur:</h3>
        <ul>
          <li>Luas Kamar: {article.features.luasKamar}</li>
          <li>Kamar Mandi: {article.features.kamarMandi}</li>
          <li>Wifi: {article.features.wifi ? "Ada" : "Tidak ada"}</li>
          <li>Lemari: {article.features.lemari ? "Ada" : "Tidak ada"}</li>
          <li>Kasur: {article.features.kasur ? "Ada" : "Tidak ada"}</li>
          <li>Meja: {article.features.meja ? "Ada" : "Tidak ada"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
