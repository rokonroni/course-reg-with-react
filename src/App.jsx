import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {
  const [selectedCards, setSelectedCards]=useState([]);
  const [remainingCredit, setRemainingCredit]= useState(0)
  
  const handleSelect =(card) =>{
    console.log(card.id);
    const isExist = selectedCards.find((item) => item.id == card.id);
    let credit = card.credit;
    if (isExist) {
      return alert("already Selected");
    } else {
      selectedCards.forEach((item) => {
        credit = credit + item.credit;
      });
      const remaining = 20 - credit;
      if (credit > 20) {
      return alert("Credit Finish");
      } else {
        setRemainingCredit(remaining);
        setSelectedCards([...selectedCards, card]);
      }
    }
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='flex flex-col md:flex-row gap-5 text-left'>
          <Cards handleSelect = {handleSelect}></Cards>
          <Cart selectedCards = {selectedCards} remainingCredit={remainingCredit}></Cart>
      </div>
    </>
  )
}

export default App
