import Navbar from "./Navbar";

const Header: React.FC = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src="/logo.svg" alt="Cristian Rojas" />
                <img src="/moon.svg" alt="Night mode" />
            </div>
            <Navbar className="header__navigation"/>
        </div>
    )
}

export default Header;
