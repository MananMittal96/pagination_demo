import React from 'react';

export const Pagination = ({ numbers, cardsPerPage, totalCards, paginate }) => {
  return (
      <div className='pagination-container'>
        {numbers.map(index => (
          <div className='page-number' 
            style={{
              display: 'inline'
              }}>
            <button onClick={() => paginate(index)}>
              {index}
            </button>
          </div>
        ))}
      </div>
  );
};