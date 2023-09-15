import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ handleSelect }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {cards.map((card) => (
          <Card card={card} handleSelect={handleSelect} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  handleSelect: PropTypes.func.isRequired
};
export default Cards;
