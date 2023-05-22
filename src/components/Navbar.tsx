import Link from "next/link";
import { useRef, useState } from "react";

type Props = {
    className?: string
  }

const Header: React.FC<Props> = (props: Props) => {
    const [activeLink, setActiveLink] = useState(0);
    let navbarRef = useRef<HTMLDivElement>(null);

    const updateNavbar = (event: React.MouseEvent<HTMLAnchorElement>): void => {
        if (navbarRef.current) {

        }
        console.log(event.target)
        console.log(navbarRef)
    }

    const getNavbarMainLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" onClick={updateNavbar} href="/#about"> 
                <img src="/purple-ellipse.svg" alt="" /> 
                About
            </Link>
            <Link className="navbar-link" onClick={updateNavbar} href="/#skills">Skills</Link>
            <Link className="navbar-link" onClick={updateNavbar} href="/#timeline">Timeline</Link>
            <Link className="navbar-link" onClick={updateNavbar} href="/#projects">Projects</Link>
            <Link className="navbar-link" onClick={updateNavbar} href="/#references">References</Link>
        </>
    )

    const getNavbarSecondaryLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" href="/#test"><img src="/email-icon.svg" alt="email" /></Link>
            <Link className="navbar-link" href="/#test"><img src="/book-closed.svg" alt="book" /></Link>
            <Link className="navbar-link" href="/#test"><img src="/cv.svg" alt="CV" /></Link>
        </>
    )

    return (
        <div className={"navbar " + ((props.className)?props.className:"")} >
            <div className='navbar__main' ref={navbarRef}>
                { getNavbarMainLinks() }
            </div>
            <div className="navbar__secondary">
                { getNavbarSecondaryLinks() }
            </div>
        </div>
    )
}

export default Header;