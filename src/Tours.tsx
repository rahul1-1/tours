import React from 'react';
import { ITours } from './models/ITours';
import Tour from './Tour';

interface IProps {
  tours : ITours[],
  removeTour: (id:string)=>void;
}
const Tours:React.FC<IProps> = ({tours,removeTour}) => {
  return(
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour,index) => { 
           return <Tour key={tour.id} {...tour} removeTour = {removeTour} ></Tour>
          }
        )}
      </div>
    </section>
  )
};

export default Tours;
