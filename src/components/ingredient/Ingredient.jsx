import {Typography, Box, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';

const Ingredient = (props)  => {
    return (
        <li style={{ listStyleType: "none", maxHeight: 208}}>
            <img src={props.image}/>
            <div>
                <div className='mt-1 mb-1' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><span className="text text_type_digits-default mr-2">{props.price}</span><CurrencyIcon/></div>
                <h3 className="text text_type_main-default mb-6">{props.name}</h3>
            </div>
        </li>
    )
}

export default Ingredient