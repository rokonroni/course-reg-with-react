import { FaMoneyCheck, FaBookOpen  } from 'react-icons/fa';
const Card = ({card, handleSelect}) => {
    const {title, description, credit, price, image}=card
  return (
    <div>
      <div className="card p-4 bg-white rounded-lg shadow-xl space-y-3">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body space-y-2 items-center">
          <h2 className="card-title font-semibold text-lg" >{title}</h2>
          <p>{description.slice(0, 100)}  <a href="#" className="text-blue-400">See More</a></p>
          <div className='flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2'>
                <FaMoneyCheck /> Price: {price}BDT
            </div>
            <div className='flex items-center gap-2'>
                <FaBookOpen /> Credit: {credit}hr
            </div>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleSelect(card)} className="btn w-full bg-blue-600 p-2 rounded-lg text-white">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
