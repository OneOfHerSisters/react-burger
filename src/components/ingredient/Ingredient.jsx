import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({handleClick, item})  => {
    return (
        <li onClick={(e) => handleClick(e, item)} style={{ listStyleType: "none", cursor: 'pointer'}}>
            <img alt='что-то вкусное' src={item.image}/>
            <div>
                <div className='mt-1 mb-1' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><span className="text text_type_digits-default mr-2">{item.price}</span><CurrencyIcon/></div>
                <h3 className="text text_type_main-default mb-6">{item.name}</h3>
            </div>
        </li>
    )
}

Ingredient.propTypes = {handleClick: PropTypes.func,
    item: PropTypes.shape({
    _id:  PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v :  PropTypes.number,
  })}
  
  

export default Ingredient

