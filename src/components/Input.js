import React from 'react';
import PropTypes from 'prop-types'; 
import './style/Input.scss';

const Input = ({ 
  onChange,
  type, 
  value, 
  autoComplete, 
  placeholder, 
  onFocus,
  className
}) => {

  return (
    <input 
      onChange={onChange}
      type={type}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onFocus={onFocus}
      className={className}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFocus: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default Input;