import PropTypes from "prop-types";
import { FaBookOpen, FaMoneyCheck } from "react-icons/fa";

const Card = ({ card, handleSelect }) => {
  const { title, description, credit, price, image } = card;
  return (
    <div className="card p-4 bg-white rounded-lg shadow-xl space-y-3">
      <div className="flex flex-col justify-between h-full gap-3">
        <div>
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl mx-auto h-40" />
        </figure>
        <div className="card-body space-y-2 mt-3 items-center">
          <h2 className="card-title font-semibold text-lg">{title}</h2>
          <p className="text-justify text-gray-500">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <FaMoneyCheck /> Price: {price}USD
          </div>
          <div className="flex items-center gap-2">
            <FaBookOpen /> Credit: {credit}hr
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleSelect(card)}
            className="btn w-full bg-blue-600 p-2 rounded-lg text-white"
          >
            Select
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Card;
