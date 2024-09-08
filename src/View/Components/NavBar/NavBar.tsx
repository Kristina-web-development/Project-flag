import { FC } from "react";
import Path from "../../../assets/images/Path.svg";
import "./NavBar.css";

interface INavBar {
  setTheme: Function;
  theme: string;
}

const NavBar: FC<INavBar> = ({ setTheme, theme }) => {
  return (
    <nav className={theme == "dark" ? "darkthemeNavBar" : "lightthemeNavBar"}>
      <div>
        <p id='navp' className={theme == "dark" ? "lightText" : "darkText "} width={233} height={33}>Where in the world?</p>
        <div className="header__theme">
          <button id='navbutton'
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            {/* <div className="nav__moon_white"> */}
              <img id='navimg' src={Path} alt="moon" width={18} height={17} />
            {/* </div> */}
           <p id="navbutp" className={theme == "dark" ? "lightText" : "darkText "}> Dark Mode</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
