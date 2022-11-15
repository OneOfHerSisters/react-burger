import React from 'react';
import './App.css';
import Header from '../app-header/app-header';
import BurgerIngredients from  '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import {baseUrl} from '../../utils/utils';
import Api from '../api/api';

const api = new Api(baseUrl)

function App() {
  const [state, setState] = React.useState({ 
    isLoading: false,
    hasError: false,
    data: []
  })

   React.useEffect(() => {
    setState({ ...state, hasError: false, isLoading: true });
    api
      .getData()      
      .then((data) => setState({ ...state, data: data.data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      })
  }, [])


  return (
    <div className="App">
     <Header/>
     <main style={{display: 'flex', justifyContent: 'center', width: 1240, marginLeft: 'auto', marginRight: 'auto'}}>
      <BurgerIngredients data = {state.data}/>
      <BurgerConstructor data = {state.data}/>
     </main>
    </div>
  );
}

export default App;
