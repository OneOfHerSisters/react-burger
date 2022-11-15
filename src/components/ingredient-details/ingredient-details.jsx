import React from 'react';
import Modal from '../modal/modal';
import detailsStyles from './ingredient-details.module.css'
import PropTypes from 'prop-types'

export default function IngredientDetails({handleClose, item}) {
    return(
        <Modal handleClose={handleClose}>
            <div className={detailsStyles.details}>
                <h2 style={{lineHeight: '64px'}} className="text text_type_main-large mt-10">Детали ингредиента</h2>
                <img src={item.img} style={{width: 480}}></img>
                <h3 className="text text_type_main-medium mt-4 mb-8">{item.name}</h3>
                <ul className={detailsStyles.nutrients}>
                    <li className={detailsStyles.nutrient}>
                        <h4  className="text text_type_main-default text_color_inactive">Калории, ккал</h4>
                        <span className="text text_type_digits-default">{item.calories}</span>
                    </li>
                    <li className={detailsStyles.nutrient}>
                        <h4  className="text text_type_main-default text_color_inactive">Белки</h4>
                        <span className="text text_type_digits-default">{item.proteins}</span>
                    </li>
                    <li className={detailsStyles.nutrient}>
                         <h4 className="text text_type_main-default text_color_inactive">Жиры</h4>
                         <span className="text text_type_digits-default">{item.fat}</span>
                    </li>
                    <li className={detailsStyles.nutrient}>
                         <h4 className="text text_type_main-default text_color_inactive">Углеводы</h4>
                         <span className="text text_type_digits-default">{item.carbohydrates}</span>
                    </li>
                </ul>
            </div>

        </Modal>
    )
}

 IngredientDetails.propTypes = {handleClose: PropTypes.func, 
    item: PropTypes.shape({
    _id:  PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  })}
  