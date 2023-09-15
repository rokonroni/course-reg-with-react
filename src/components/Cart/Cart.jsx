import SelectedCard from '../SelectedCard/SelectedCard';
import PropTypes from 'prop-types';

const Cart = ({selectedCards, remainingCredit, totalCredit, totalPrice}) => {
    return (
        <div className='w-1/4'>
            <div className='rounded-lg bg-white p-4'>
            <div className='border-b-2 pb-4'>
                <h3 className='font-bold text-lg text-blue-600'>Credit Hour Remaining {remainingCredit}hr</h3>
            </div>
            <div className='my-2'>
                <h3 className='font-bold text-2xl'>Course Name</h3>
            </div>
            <div className='mb-2'>
                {
                    selectedCards.map((selectedCard, idx) => <SelectedCard key={selectedCard.id} selectedCard={selectedCard} idx = {idx}></SelectedCard>)
                }
            </div>
            <div className='border-y-2 py-2'>
                <h3 className='font-medium text-lg'>Total Credit Hour : {totalCredit}</h3>
            </div>
            <div className='py-2'>
                <h3 className='font-bold text-lg'>Total Price : {totalPrice} USD</h3>
            </div>
        </div>
        </div>
    );
};
Cart.propTypes = {
  selectedCards: PropTypes.array.isRequired,
  remainingCredit: PropTypes.number.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired
};
export default Cart;