import React from 'react';
import './App.css';
import Header from '../app-header/App-header';
import BurgerIngredients from  '../burger-ingredients/Burger-ingredients'
import BurgerConstructor from '../burger-constructor/Burger-constructor';
import ingredients from '../../utils/data';

function App() {
  return (
    <div className="App">
     <Header/>
     <main style={{display: 'flex', justifyContent: 'center', width: 1240}}>
      <BurgerIngredients data = {ingredients}/>
      <BurgerConstructor data = {ingredients}/>
     </main>
    </div>
  );
}

export default App;
