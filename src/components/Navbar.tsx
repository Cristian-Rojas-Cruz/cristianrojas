import Link from "next/link";
import { useRef, useState } from "react";

type Props = {
    className?: string
}

const Header: React.FC<Props> = (props: Props) => {
    const [activeLink, setActiveLink] = useState<number>(0);
    const navbarRef = useRef<HTMLDivElement>(null);

    const updateNavbar = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (navbarRef.current) {
            if (navbarRef.current.children[activeLink].children[0]) {
                navbarRef.current.children[activeLink].children[0].remove();
                navbarRef.current.children[activeLink].classList.toggle("navbar-link-highlight");
            }
            Array.from(navbarRef.current.children).forEach((element, index) => {
                if (element === event.target) {
                    setActiveLink(index)
                    element.classList.toggle("navbar-link-highlight");
                    element.prepend(generateImg("/purple-ellipse.svg", ""))
                }
            });
        }
    };

    const generateImg = (src: string, alt: string): HTMLImageElement => {
        const newImg = document.createElement("img");
        newImg.src = src;
        newImg.alt = alt;
        return newImg;
    }

    const getNavbarMainLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" onClick={updateNavbar} href="/#about"> 
                <img src="/purple-ellipse.svg" alt="" /> 
                About
            </Link>
            <Link className="navbar-link" onClick={updateNavbar}href="/#skills">Skills</Link>
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