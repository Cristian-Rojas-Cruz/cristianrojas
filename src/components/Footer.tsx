import Link from "next/link";

const Footer: React.FC = () => {

    const getFooterLinks = () => (
        <>
            <Link className="navbar-link navbar-link-highlight" target="_blank" href="https://stackoverflow.com/users/21926618/cristian-camilo-rojas-cruz">
                <img src="/stackoverflow-icon.svg" alt="stackoverflow" />
            </Link>
            <Link className="navbar-link" target="_blank" href="https://www.linkedin.com/in/cristian-camilo-rojas-cruz/">
                <img src="/linkedin-icon.svg" alt="linkedin" />
            </Link>
            <Link className="navbar-link" target="_blank" href="https://github.com/Cristian-Rojas-Cruz">
                <img src="/github-icon.svg" alt="github" />
            </Link>
        </>
    )

    return (
        <footer className={`footer`}>
            <img src="./black-wave.svg" alt="" />
            <div className="footer__content">
                <div className="footer-socials">
                    { getFooterLinks() }
                </div>
                <p className="footer-madeby">Designed & built by Cristian Rojas and Veronika Esparragoza</p>
            </div>
        </footer>
    )
}

export default Footer;


