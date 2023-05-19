import Link from "next/link";

type Props = {
    className?: string
  }

const Header: React.FC<Props> = (props: Props) => {
    const getNavbarMainLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" href="/#about"> 
                <img src="/purple-ellipse.svg" alt="" /> 
                About
            </Link>
            <Link className="navbar-link" href="/#skills">Skills</Link>
            <Link className="navbar-link" href="/#timeline">Timeline</Link>
            <Link className="navbar-link" href="/#projects">Projects</Link>
            <Link className="navbar-link" href="/#references">References</Link>
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
            <div className='navbar__main'>
                { getNavbarMainLinks() }
            </div>
            <div className="navbar__secondary">
                { getNavbarSecondaryLinks() }
            </div>
        </div>
    )
}

export default Header;