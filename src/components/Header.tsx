import Navbar from "./Navbar";

const Header: React.FC = () => {
    return (
        <div className='header'>
            <img className="header__logo" src="/logo.svg" alt="Cristian Rojas" />
            <Navbar className="header__navigation"/>
        </div>
    )
}

export default Header;
