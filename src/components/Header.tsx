import { useEffect } from "react";
import Navbar from "./Navbar";
import { useWindowSize } from "@/utils/hooks";

const Header: React.FC = () => {
  const { width } = useWindowSize();

  const getLogo = () => {
    if(width <= 768) {
      return (<img className="header__logo" src="/logo-shorthand.svg" alt="Cristian Rojas" />)
    } else {
      return (<img className="header__logo" src="/logo.svg" alt="Cristian Rojas" />)
    }
  }

    return (
        <div className='header'>
          <div className="container">
            {
              getLogo()
            }
            <Navbar className="header__navigation"/>
          </div>
        </div>
    )
}

export default Header;
