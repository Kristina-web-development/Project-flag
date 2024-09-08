import { FC, useEffect, useState } from "react";
import data from "../../assets/data.json";
import FlagCard from "../Components/FlagCard/FlagCard";
import Header from "../Components/Header/Header";
import "./main-style.css";
import Flag from "../Pages/Flag";

interface IMainPage {
  theme: string;
}
const MainPage: FC<IMainPage> = ({ theme }) => {
  const [countOfFlags, setCountOfFlags] = useState(8);
  const [flags, setFlags] = useState(data.slice(0, countOfFlags));
  
  useEffect(() => {
    setFlags(data.slice(0, countOfFlags));
  }, [countOfFlags]);

  return (
    <>
      <Header dataFlag={data} setFlags={setFlags} theme={theme} />
      <main
        className={
          theme == "dark" ? "darkthemeBackGround" : "lightthemeBackGround"
        }
      >
        {/* Сделать media-query для телефона и таблет, грид должен меняться (при телефоне column по количеству уменьшается) */}
        <section className="gallery">
          {flags.map((fl, index) => (
            <FlagCard
              key={index}
              imgCountryFlag={fl.flags.svg}
              countryName={fl.name}
              countryPopulation={fl.population}
              countryRegion={fl.region}
              countryCapital={fl.capital}
              theme={theme}
            />
          ))}
        </section>
      
        <button id="mainbutton" className={theme == "dark" ? "darkthemeButton" : "lightthemeButton" } onClick={() => setCountOfFlags(countOfFlags + 8)}>
          Show more
        </button>
      </main>
    </>
  );
};

export default MainPage;
