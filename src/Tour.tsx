import React, { useState } from 'react';
const Tour: React.FC<{ id: string, image: string, info: string, price: string, name: string,  removeTour: (id:string)=>void;
}> = ({ id, image, info, price, name,removeTour }) => {
  

  const [readMore, setReadMore] = useState<boolean>(false)
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? 'show less' : '  read more'}
      </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
    </footer>
  </article>
};

export default Tour;
