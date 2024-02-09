import { useWindowSize } from "@/utils/hooks";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
    className?: string
}

const Navbar: React.FC<Props> = (props: Props) => {
    const { width } = useWindowSize();
    const [activeLink, setActiveLink] = useState<number>(0);
    const navbarRef = useRef<HTMLDivElement>(null);

    const updateNavbar = (event: React.MouseEvent<HTMLAnchorElement>, index: Number) => {
        if (navbarRef.current && index !== activeLink) {
            if (navbarRef.current.children[activeLink].children[0].className === "navbar-link-highlight__ellipse" ){
                navbarRef.current.children[activeLink].classList.remove("navbar-link-highlight");
                navbarRef.current.children[activeLink].children[0].remove();
            }

            Array.from(navbarRef.current.children).forEach((element, index) => {
                if (element === event.target) {
                    setActiveLink(index)
                    element.classList.add("navbar-link-highlight");
                    
                    const image = document.createElement("img")
                    image.src = "/purple-ellipse.svg";
                    image.alt = "";
                    image.classList.add("navbar-link-highlight__ellipse");

                    element.prepend(image)
                }
            });
        }
    };

    const generateImg = (src: string, alt: string, className?: string) => {
        return (
            <img src={src} alt={alt} className={className?className:""} />
        )
    }

    const getNavbarLinkContent = (iconLink: string, text:string) => {
        if (width <= 768) {
            return (
                <>{generateImg(iconLink, text)}</>
            ) 
        }
        return text;
    }

    const getNavbarMainLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" onClick={(e) => updateNavbar(e,0)} href="/#about-me"> 
                <img className="navbar-link-highlight__ellipse" src="/purple-ellipse.svg" alt="" /> {  getNavbarLinkContent("/home.svg" , "About Me") }
            </Link>
            <Link className="navbar-link" onClick={(e) => updateNavbar(e,1)} href="/#skills">{ getNavbarLinkContent("/briefcase.svg" , "Skills") }</Link>
            <Link className="navbar-link" onClick={(e) => updateNavbar(e,2)} href="/#timeline">{ getNavbarLinkContent("/clock.svg" , "Timeline") }</Link>
            <Link className="navbar-link" onClick={(e) => updateNavbar(e,3)} href="/#projects">{ getNavbarLinkContent("/projects-icon.svg" , "Projects") }</Link>
            <Link className="navbar-link" onClick={(e) => updateNavbar(e,4)} href="/#references">{ getNavbarLinkContent("/persons-icon.svg" , "References") }</Link>
            
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
            <div className="navbar__main" ref={navbarRef}>
                { getNavbarMainLinks() }
            </div>
            <div className="navbar__middle">
              <img src="/spain-flag.svg" alt="language" />
            </div>

            <div className="navbar__secondary">
                { getNavbarSecondaryLinks() }
            </div>
        </div>
    )
}

export default Navbar;