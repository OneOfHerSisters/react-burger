import React from 'react';
import './App.css';
import Header from '../app-header/App-header';
import Modal from '../modal/modal';
import BurgerIngredients from  '../burger-ingredients/Burger-ingredients'
import BurgerConstructor from '../burger-constructor/Burger-constructor';
import IngredientDetails from '../ingredient-details/ingredient-details'; 

function App() {
  const [state, setState] = React.useState({ 
    isLoading: false,
    hasError: false,
    data: []
  })

  const url = 'https://norma.nomoreparties.space/api/ingredients';

   React.useEffect(() => {
    const getData = async () => {
      setState({ ...state, hasError: false, isLoading: true });
      const res = await fetch(url);
      const data = await res.json();
      setState({ ...state, data: data.data, isLoading: false });
    }
    getData();
  }, [])


  return (
    <div className="App">
     <Header/>
     <main style={{display: 'flex', justifyContent: 'center', width: 1240, marginLeft: 'auto', marginRight: 'auto'}}>
      <BurgerIngredients data = {state.data}/>
      <BurgerConstructor data = {state.data}/>
     </main>
     {/* <div style={{overflow: 'hidden'}}>
                <button onClick={handleOpenModal}>Открыть модальное окно</button>
                {visible &&
                  <Modal closeModal={handleCloseModal}>
                    <IngredientDetails></IngredientDetails>
                  </Modal>}
    </div> */}
    </div>
  );
}

export default App;
