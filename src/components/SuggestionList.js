import React from 'react';
import './style/SuggestionList.scss';
import PropTypes from 'prop-types'; 
import { FaMapMarkerAlt } from  'react-icons/fa';

const SuggestionList = ({ 
    updateInputStartValue,
    localName, 
    uniqueName,
    className,
    cityId
}) => {
    
    const handleClickCity = (uniqueName, cityId) => (e) => {
        updateInputStartValue(e.currentTarget.textContent, uniqueName, cityId);
    }

    return (
        <li 
            className={className} 
            onClick={handleClickCity(uniqueName, cityId)}
        >
            <FaMapMarkerAlt className="search__marker"/> { localName }
        </li>
    )
};

SuggestionList.propTypes = {
    updateInputStartValue: PropTypes.func.isRequired,
    localName: PropTypes.string.isRequired,
    uniqueName: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    cityId: PropTypes.number.isRequired,
}

export default SuggestionList;