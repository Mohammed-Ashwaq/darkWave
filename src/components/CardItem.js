import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ title, description, label, path }) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            {/* <img src={src} alt="Card Image" className="cards__item__img" /> */}
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__item__title">{title}</h3>
            <p className="cards__item__description">{description}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
