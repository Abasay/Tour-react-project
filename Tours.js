import React from 'react';
import Tour from './Tour';
import { useState } from 'react';

const Tours = ({tours, removeTour}) => {
  // const removeTour = (id) =>{
  //   const tours = tours.filter((tour) => tour.id !== id);
  // }

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
      </div>
      <div className="underline"></div>
      {tours.map((tour) => {
        const {id, name, info,price, image} = tour;
        return (
          <Tour key={id} {...tour} removeTour={removeTour}/>
        )
      })}
    </section>
  )
};

export default Tours;
