import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [selectedCard, setSelectedCard]=useState([]);
  
  const handleSelect =(card) =>{
    const newSelected = [...selectedCard,card];
    setSelectedCard(newSelected);
  }


  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='flex flex-col md:flex-row gap-5 text-left'>
          <Cards handleSelect={handleSelect}></Cards>
          <Cart></Cart>
      </div>
    </>
  )
}

export default App
