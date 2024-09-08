import React, { FC } from "react";
import "./Header.css";
import callmade from "../../assets/images/callmade.svg";
import search from "../../../assets/images/search.svg";
interface IHeader {
  dataFlag: any;
  setFlags: Function;
  theme: string;
}

const Header: FC<IHeader> = ({ dataFlag, setFlags, theme }) => {
  const hendleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    //    console.log(ev.target.value);
    const searchText = ev.target.value;
    const searchedCountries = dataFlag.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFlags(searchedCountries);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCountry = e.target.value;

    const filteredCountries = dataFlag.filter(
      (country) =>
        country.region.toLowerCase() === selectedCountry.toLowerCase()
    );
    setFlags(filteredCountries);
  };

  const regions = Array.from(
    new Set(dataFlag.map((country) => country.region))
  );

  return (
    <header
      className={
        theme == "dark" ? "darkthemeBackGround" : "lightthemeBackGround"
      }
    >
      <div className="header__container">
        <div className="header__input">
        <img className="header__image" src={search} alt="arrowback" width={18} height={18} />
          <input
            className="header__search"
            onChange={hendleSearch}
            placeholder="Search for a country..."
          />
        </div>
          <select className="header__select" onChange={handleSelectChange}>
            {" "}
            {/* Сделать display:flex + Сделать стили инпут и селект как в фигме*/}
            <option value="selectCountry">Filter by Region</option>
            {regions.map((region, index) => (
              <option id="countryOption" key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
      
      </div>
    </header>
  );
};

export default Header;
