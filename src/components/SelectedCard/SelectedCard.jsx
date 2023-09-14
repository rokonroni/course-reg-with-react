const SelectedCard = ({selectedCard, idx}) => {
    const {title} = selectedCard;
    return (
        <div>
            <h3>{ idx+1}. {title}</h3>
        </div>
    );
};

export default SelectedCard;