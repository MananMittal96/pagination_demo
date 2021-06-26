import React from 'react';

export const Cards = ({ cards, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='card-container'
      style={{
        marginBottom: '20px'
        }}>
      {cards && cards.map(post => (
        <div key={post.id} className='display-card'
          style={{
            outline: '1px solid grey',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingInlineStart: '10px',
            width: '50%'
            }}>
          {post.title}
        </div>
      ))}
    </div>
  );
};