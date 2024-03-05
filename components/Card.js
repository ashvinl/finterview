import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="overflow-hidden border border-gray-300 bg-gray-100 p-4 m-4 shadow rounded-md">
      {children}
    </div>
  );
};

export default Card;
