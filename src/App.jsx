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
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  const handleSelect = (card) => {
    console.log(card.id);
    const isExist = selectedCards.find((item) => item.id == card.id);
    let credit = card.credit;
    let totalCoursePrice = card.price;
    if (isExist) {
      toast.error("This Course Already Added", {
        position: "top-center",
      });
    } else {
      selectedCards.forEach((item) => {
        credit = credit + item.credit;
        totalCoursePrice = totalCoursePrice + item.price;
      });

      const remaining = 20 - credit;
      if (credit > 20) {
        toast.error("Your course credit is limited", {
          position: "top-center",
        });
      } else {
        setRemainingCredit(remaining);
        setSelectedCards([...selectedCards, card]);
        setTotalCredit(credit);
        setTotalPrice(totalCoursePrice);
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
          totalCredit = {totalCredit}
          totalPrice ={totalPrice}
        ></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
