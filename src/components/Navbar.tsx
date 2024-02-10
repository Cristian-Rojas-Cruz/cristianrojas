import { useWindowSize } from "@/utils/hooks";
import Link from "next/link";

type Props = {
    className?: string
}

const navbarInfo = {
  navigation: [
    {
      title: "About me",
      href: "/#about-me",
      image: "/home.svg"
    },
    {
      title: "Skills",
      href: "/#skills",
      image: "/briefcase.svg"
    },
    {
      title: "Timeline",
      href: "/#timeline",
      image: "/clock.svg"
    },
    {
      title: "Projects",
      href: "/#projects",
      image: "/projects-icon.svg"
    },
    {
      title: "References",
      href: "/#references",
      image: "/persons-icon.svg"
    },
  ],
  navigationHighlight: [
    {
      alt: "email",
      href: "#",
      image: "/email-icon.svg"
    },
    {
      alt: "book",
      href: "#",
      image: "/book-closed.svg"
    },
    {
      alt: "CV",
      href: "#",
      image: "/cv.svg"
    },

  ]
}

const Navbar: React.FC<Props> = (props: Props) => {
    const { width } = useWindowSize();

    const updateNavbar = (event: React.MouseEvent<HTMLAnchorElement>) => {
      const target = event.target as Element;
      const navigation = document.getElementById("navigation")

      if (navigation) {
        const navItems: HTMLCollection = navigation.children;
        Array.from(navItems).forEach((link) => {
          link.classList.remove("navbar-link-highlight");
          if(link.children.length > 0) {
            link.children[0].classList.remove("navbar-link-highlight");
          }
        })
      }

      target.classList.toggle("navbar-link-highlight")
    };

    const getNavbarLinkContent = (iconLink: string, text:string) => {
        if (width <= 900) {
            return <img src={iconLink} alt={text} />
        }
        return text;
    }

    return (
        <div className={"navbar " + ((props.className)?props.className:"")} >
            <div className="navbar__main" id="navigation">
                { 
                  navbarInfo.navigation.map((link,index) => {
                    return <Link className="navbar-link" key={"navigation__main-nav-link-"+index} onClick={updateNavbar} href={link.href}>{ getNavbarLinkContent(link.image , link.title) }</Link>
                  })
                }
            </div>
            <div className="navbar__middle">
              <img src="/spain-flag.svg" alt="language"/>
            </div>

            <div className="navbar__secondary">
                { 
                  navbarInfo.navigationHighlight.map((link, index) => {
                    return <Link className="navbar-link" key={"navigation__secondary-nav-link-"+index} href={link.href}><img src={link.image} alt={link.alt} /></Link>
                  })
                }
            </div>
        </div>
    )
}

export default Navbar;