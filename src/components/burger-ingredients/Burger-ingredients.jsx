import {Tab, Typography, Box, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ingredientsStyles from './Burger-ingredients.module.css';
import Ingredient from '../ingredient/Ingredient';


const BurgerIngredients = ({data}) => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={ingredientsStyles.burgerIngredients}>
            <h1 className={`text text_type_main-large ${ingredientsStyles.title}`}>Соберите бургер</h1>
          <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
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
  
  export default BurgerIngredients;