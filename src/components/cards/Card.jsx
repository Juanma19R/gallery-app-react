import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({img}) => {
    return (
            <div className="card">
                <img src={img} className="card-img-top" alt="imagen.png" />
            </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
}

export default Card;