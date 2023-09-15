import PropTypes from 'prop-types';

const SelectedCard = ({selectedCard, idx}) => {
    const {title} = selectedCard;
    return (
        <div className="mb-1">
            <h3 className="text-gray-500 font-normal text-base">{ idx+1}. {title}</h3>
        </div>
    );
};
SelectedCard.propTypes = {
  selectedCard: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};
export default SelectedCard;