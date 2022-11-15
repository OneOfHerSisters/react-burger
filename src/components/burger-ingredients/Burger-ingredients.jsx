import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import PropTypes from 'prop-types';
import IngredientDetails from '../ingredient-details/ingredient-details';


const BurgerIngredients = ({data}) => {
    const one = "one";
    const two = "two";
    const three = "three";
    const [current, setCurrent] = React.useState('one')
    const [info, setInfo] = React.useState()

    const handleIngredientClick = (event, item) => {
      event.stopPropagation();
      setInfo({
          img: item.image,
          price: item.price,
          name: item.name,
          calories: item.calories,
          fat: item.fat,
          carbohydrates: item.carbohydrates,
          proteins: item.proteins
      })
    }
    
    const resetInfoState = () => {
      setInfo()
    }

    React.useEffect(() => {
      const element = document.getElementById(current);
      element.scrollIntoView();
    }, [current])
   
    const bun = React.useMemo(() => data.filter(elem => elem['type'] === 'bun').map(item => {
      return <Ingredient key={item._id} item={item} handleClick={handleIngredientClick}></Ingredient>
    }), [data]);

    const sauce = React.useMemo(() => data.filter(elem => elem['type'] === 'sauce').map(item => {
      return <Ingredient key={item._id} item={item} handleClick={handleIngredientClick}></Ingredient>
    }), [data]);

    const main = React.useMemo(() => data.filter(elem => elem['type'] === 'main').map(item => {
      return <Ingredient key={item._id} item={item} handleClick={handleIngredientClick}></Ingredient>
    }), [data]);

    return (
      <>
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
            <div id='one'>
              <h2 className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Булки</h2>
              <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  { bun }
              </ul>
            </div>
            <div id='two'>
            <h2  className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Соусы</h2>
            <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  { sauce }
              </ul>
              </div>
              <div id='three'>
              <h2  className={`text text_type_main-medium ${ingredientsStyles.ingredientName}`}>Начинки</h2>
              <ul className={`pl-4 pr-4 pt-6 ${ingredientsStyles.ingredientSection}`}>
                  { main }
              </ul>
              </div>
            </div>
          </section> 
          {info && <IngredientDetails handleClose={resetInfoState} item={info}></IngredientDetails>}
          </>
        )
};

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