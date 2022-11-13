import React from 'react';
import ReactDOM from "react-dom";
import './modal-overlay.css';

const modalRoot = document.getElementById('react-modals'); 

export default function ModalOverlay ({handleClose, children}) {
        
        return ReactDOM.createPortal(
                (       
                <div onClick={handleClose} className="modal-overlay">        
                        {children}
                </div>
                ), 
                modalRoot
            );

}