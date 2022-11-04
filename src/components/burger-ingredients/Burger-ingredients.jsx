import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ingredientsStyles from './Burger-ingredients.module.css';
import Ingredient from '../ingredient/Ingredient';
import PropTypes from 'prop-types';


const BurgerIngredients = ({data}) => {
    const one = "one";
    const two = "two";
    const three = "three";
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={ingredientsStyles.burgerIngredients}>
            <h1 className={`text text_type_main-large ${ingredientsStyles.title}`}>Соберите бургер</h1>
          <div style={{ display: 'flex' }}>
            <Tab value={one} active={current === {one}} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value={two} active={current === {two}} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab value={three} active={current === {three}} onClick={setCurrent}>
              Начинки
            </Tab>
          </div>
          <div className={ingredientsStyles.scrollSection}>
            <div>
              <h2 className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Булки</h2>
              <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  {
                      data.filter(elem => elem['type'] === 'bun').map(item => {
                          return Ingredient(item);
                      })
                  }
              </ul>
            </div>
            <div>
            <h2  className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Соусы</h2>
            <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  {
                      data.filter(elem => elem['type'] === 'sauce').map(item => {
                          return Ingredient(item);
                      })
                  }
              </ul>
              </div>
              <div>
              <h2  className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Начинки</h2>
              <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  {
                      data.filter(elem => elem['type'] === 'main').map(item => {
                          return Ingredient(item);
                      })
                  }
              </ul>
              </div>
            </div>
          </section>
        )
}

BurgerIngredients.propTypes = {data: PropTypes.arrayOf(PropTypes.shape({
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
}))
}

export default BurgerIngredients;