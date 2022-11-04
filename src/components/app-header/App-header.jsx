import {Logo, BurgerIcon, ListIcon, ProfileIcon, Typography, Box} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import headerStyles from './App-header.module.css';

class Header extends React.Component {
    render() {
      return (
        <header className={`${headerStyles.header} mb-10`}>
          <nav  className={headerStyles.navigation}>
            <ul className={headerStyles.menu}>
                <li className={`pl-5 pb-4 pr-5 pt-4 mt-4 mb-4 mr-2 ${headerStyles.menuItem}`}><BurgerIcon type="secondary" /><span className="text text_type_main-default ml-2">Конструктор</span></li>
                <li className={`pl-5 pb-4 pr-5 pt-4 mt-4 mb-4 ${headerStyles.menuItem}`}><ListIcon type="secondary" /><span className="text text_type_main-default ml-2">Лента заказов</span></li>
            </ul>
          </nav>
          <div className={headerStyles.logo}><Logo className={headerStyles.logo}/></div>
          <nav  className={headerStyles.navigation}>
            <ul className={headerStyles.menu}>
                <li className={`pl-5 pb-4 pt-4 pr-5 mt-4 mb-4 ${headerStyles.menuItem}`}><ProfileIcon type="secondary" /><span className="text text_type_main-default ml-2">Личный кабинет</span></li>
            </ul>
          </nav>
        </header>
      );
    }
  }
  
  export default Header;