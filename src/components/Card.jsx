import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ index, value, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={() => onClick(index)}>
      <div className="card-inner">
        <div className="card-front">{value}</div>
        <div className="card-back">?</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
