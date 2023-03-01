import React, { useState } from 'react';

const Tour: React.FC<{ id: string, image: string, info: string, price: string, name: string,ind:number,  removeTour: (id:string)=>void;
}> = ({ id, image, info, price, name,removeTour ,ind}) => {
  const images =["https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-4.0.3&ixid=&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Um9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"]

  const [readMore, setReadMore] = useState<boolean>(false)
 
  return <article className='single-tour'>
    <img src={images[ind]} alt={name} />
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
