import React from 'react';
import { Link } from 'react-router-dom';

const Button: React.FC = () => {
  return (
    <Link to={'/publish'} style={{
      fontSize: '1rem',
      backgroundColor: '#3490DC',
      display: 'inline-block',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      outline: 'none',
      textDecoration: 'none',
      marginRight: '1rem',
      color: '#FFF',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      fontFamily: 'sans-serif',
      textAlign: 'center',
    }}>
      Publish
    </Link>
  );
};

export default Button;
