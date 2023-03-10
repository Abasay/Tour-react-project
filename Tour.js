import React, { useState } from 'react';

const Tour = ({id, name, info, price, image, removeTour}) => {

  const [showMore, setShowMore] = useState(true)



  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        { showMore ? <p>{info.substring(0, 200)} <button onClick={() => setShowMore(!showMore)}>read more</button> </p> : <p>{info} <button onClick={() => setShowMore(!showMore)}>show less</button></p>}
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
      
      
    </article>
  );
};

export default Tour;
