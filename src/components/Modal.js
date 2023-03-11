import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

function Modal() {
    const {showModal, closeModal}= useGlobalContext();
    return ( 
    <section className={showModal? ` modal-overlay show-modal `: `modal-overlay`}>
        <div className="modal-container">
            <h2>Modal Content</h2>
            <button className="close-modal-btn" onClick={closeModal}>
                <FaTimes/>
            </button>
        </div>
    </section> 
    );
};

export default Modal;