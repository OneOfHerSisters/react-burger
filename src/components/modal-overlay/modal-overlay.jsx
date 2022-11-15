import React from 'react';
import ReactDOM from "react-dom";
import overlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('react-modals'); 

export default function ModalOverlay ({handleClose, children}) {
        return ReactDOM.createPortal(
                (       
                <div onClick={handleClose} className={overlayStyles.modalOverlay}>        
                        {children}
                </div>
                ), 
                modalRoot
            );

}

ModalOverlay.propTypes = {handleClose: PropTypes.func.isRequired, 
        children: PropTypes.oneOfType([
                PropTypes.arrayOf(PropTypes.node),
                PropTypes.node
            ]).isRequired
        }