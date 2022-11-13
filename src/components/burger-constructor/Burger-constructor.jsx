import {CurrencyIcon, DragIcon, Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import constructorStyles from './Burger-constructor.module.css';
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details';

const BurgerConstructor = ({data}) => {
    const [ordered, setOrder] = React.useState(false);

    const handleOrder = () => {
        setOrder(true)
    }

    const handleClose = () => {
        setOrder(false)
    }

    return (
            <section className={`${constructorStyles.burgerConstructor} pl-4`}>
                 <ul className={constructorStyles.constructorScroll}>
                 {data.filter(elem => elem['type'] === 'bun').map(item => {
                          return  (
                          <li key={item._id} style={{listStyle: 'none'}} className='ml-8 mr-2'>
                            <ConstructorElement
                                type="top"
                                isLocked
                                text={`${item.name} (верх)`}
                                price={item.price}
                                thumbnail={item.image}
                                />
                        </li>
                          )
                      })
                    }
                    {
                    data.filter(elem => elem['type'] !== 'bun').map(item => {
                        return (
                            <li key={item._id} className='mr-2' style={{listStyle: 'none', display: 'flex', alignItems: 'center'}}>
                                <div className='mr-3' style={{display: 'inline-block'}}>
                                    <DragIcon/>
                                </div>
                                <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                          </li>
                        )
                    })
                }
                {
                    data.filter(elem => elem['type'] === 'bun').map(item => {
                        return  (
                        <li key={item._id} style={{listStyle: 'none'}} className='ml-8 mr-2'>
                            <ConstructorElement
                                type="bottom"
                                isLocked
                                text={`${item.name} (низ)`}
                                price={item.price}
                                thumbnail={item.image}
                            />
                         </li>)
                        })
                }
                </ul>
                <div className='mt-10' style={{height: 64, display: 'flex', alignItems: 'center'}}>
                    <div className='mr-10' style={{display: 'inline-block'}}>
                        <span className="text text_type_digits-medium mr-2">0</span>
                        <CurrencyIcon/>
                    </div>
                    <Button onClick={handleOrder} type="primary" size="medium">Оформить заказ</Button>
                </div>
                {ordered && <OrderDetails handleClose={handleClose}></OrderDetails>}
            </section>
        )
}

BurgerConstructor.propTypes = {data: PropTypes.arrayOf(PropTypes.shape({
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

export default BurgerConstructor;