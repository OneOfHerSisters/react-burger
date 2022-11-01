import {Typography, Box, DeleteIcon, CurrencyIcon, DragIcon, LockIcon, Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import constructorStyles from './Burger-constructor.module.css';

const BurgerConstructor = ({data}) => {
    return (
            <section className={`${constructorStyles.burgerConstructor} pl-4`}>
                 <ul className={constructorStyles.constructorScroll}>
                 {data.filter(elem => elem['type'] === 'bun').map(item => {
                          return  (
                          <li style={{listStyle: 'none'}} className='ml-8 mr-2'>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
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
                            <li className='mr-2' style={{listStyle: 'none', display: 'flex', alignItems: 'center'}}>
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
                        <li style={{listStyle: 'none'}} className='ml-8 mr-2'>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
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
                    <Button type="primary" size="medium">Оформить заказ</Button>
                </div>
            </section>
        )
}
  
  export default BurgerConstructor;