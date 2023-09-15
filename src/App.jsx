import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleSelect = (card) => {
    console.log(card.id);
    const isExist = selectedCards.find((item) => item.id == card.id);
    let credit = card.credit;
    if (isExist) {
      toast.error("This Course Already Added", {
        position: "top-center",
      });
    } else {
      selectedCards.forEach((item) => {
        credit = credit + item.credit;
      });

      const remaining = 20 - credit;
      if (credit > 20) {
        toast.error("Your course credit is limited", {
          position: "top-center",
        });
      } else {
        setRemainingCredit(remaining);
        setSelectedCards([...selectedCards, card]);
      }
    }
  };

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="flex flex-col md:flex-row gap-5 text-left">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart
          selectedCards={selectedCards}
          remainingCredit={remainingCredit}
        ></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
