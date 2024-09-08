import React, { FC } from "react";
import "./FlagCard.css";
import {Link} from "react-router-dom";


interface IFlagCard {
  imgCountryFlag: string;
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCapital: string;
  theme: string;
}

const FlagCard: FC<IFlagCard> = ({
  imgCountryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
  theme
}) => {
console.log(theme)
  return (
   /* <section className="gallery">*/
    <Link to={`country/${countryName}`} className="no-underline">
      <div className={`gallery__container `}>
        <div className={`gallery__card  ${theme == "dark" ? "dark-theme" : "light-theme"}` }>
          <img
            className="gallery__card-image"
            src={imgCountryFlag}
            alt={`${countryName} flag`}
            width={264}
            height={160}
          />
          <h3 className="gallery__card-name">{countryName}</h3>
          <div className='gallery__card_description'>
          <p>Population:<span>{countryPopulation}</span></p>
          <p>Region:<span>{countryRegion}</span></p>
          <p>Capital:<span>{countryCapital}</span></p>
          </div>
        </div>
      </div>
    </Link>
    /*</section>*/
  );
};

export default FlagCard;
