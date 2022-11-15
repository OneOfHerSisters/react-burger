import React from 'react';
import Modal from '../modal/modal';
import orderStyles from './order-details.module.css'
import doneImage from '../../images/done.svg'
import PropTypes from 'prop-types'

export default function OrderDetails(props) {
    return(
        <Modal handleClose={props.handleClose}>
           <div className={orderStyles.order}>
                <span className="text text_type_digits-large mt-30 mb-8">034536</span>
                <h3 className="text text_type_main-medium mb-15">идентификатор заказа</h3>
                <img style={{width: 120, height: 120}} src={doneImage}></img>
                <p className="text text_type_main-default mt-15 mb-8">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
           </div>
        </Modal>

    )
}

OrderDetails.propTypes = {handleClose: PropTypes.func.isRequired}