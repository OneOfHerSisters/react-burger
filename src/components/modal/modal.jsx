import React, { useEffect } from 'react';
import {CloseIcon, Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import './modal.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types'

export default function Modal({handleClose, children}) {
    useEffect(() => {
        const closeOnEsc = (e) => (e.key === 'Escape' ? handleClose() : null);
        document.body.addEventListener('keydown', closeOnEsc);
        return () => {
            document.body.removeEventListener('keydown', closeOnEsc)
        }
    }, [handleClose, children])
      
    return (
         <ModalOverlay handleClose={handleClose}>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <div style={{position: 'absolute', right: '0'}} className='mt-15 mr-10'>
                    <CloseIcon onClick={handleClose}></CloseIcon>
                </div>
                {children}
            </div>
        </ModalOverlay>
    )
}

Modal.propTypes = {handleClose: PropTypes.func.isRequired, 
    children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
    }