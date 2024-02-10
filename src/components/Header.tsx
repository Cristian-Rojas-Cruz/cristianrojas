import { useEffect } from "react";
import Navbar from "./Navbar";
import { useWindowSize } from "@/utils/hooks";

const Header: React.FC = () => {
  const { width } = useWindowSize();

  const getLogo = () => {
  }

    return (
        <div className='header'>
          {
            <img className="header__logo" src={width <= 768?"/logo-shorthand.svg":"/logo.svg"} alt="Cristian Rojas" />
          }
          <Navbar className="header__navigation"/>
        </div>
    )
}

export default Header;
