import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const Cart = ({selectedCards, remainingCredit}) => {
    return (
        <div className='w-1/4'>
            <div className='rounded-lg bg-white p-4'>
            <div className='border-b-2 pb-4'>
                <h3 className='font-bold text-lg text-blue-600'>Credit Hour Remaining {remainingCredit}</h3>
            </div>
            <div className='mt-2'>
                <h3 className='font-bold text-2xl'>Course Name</h3>
            </div>
            <div>
                {
                    selectedCards.map((selectedCard, idx) => <SelectedCard key={selectedCard.id} selectedCard={selectedCard} idx = {idx}></SelectedCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Cart;