
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../App.css'
import { NavbarItems } from './NavbarItems';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [navbar, setNavbar] = useState(false);
//   const [menuId, setMenuId] = useState(1);

  const toggleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    const changeBgNav = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", changeBgNav);
    return () => {
      window.removeEventListener("scroll", changeBgNav);
    }
  }, [])

    return (
        <nav className={navbar ? "Navbar active" : "Navbar"}>
            <div className="NavLogo">
                <Link to="/">
                    <img src="/image/logo/logo.jpg" alt="Navbar Logo" />
                </Link>
            </div>
            <div className="Mobile-Menu__Icon">
                <ion-icon name="menu-outline" onClick={toggleNavbar}></ion-icon>
            </div>
            {(toggleMenu || screenWidth > 739) && (
                <>
                    <ul className="NavCenter">
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to="" className={item.className}>
                                    {item.name}
                                    <ion-icon name={'' || item.iconDown}></ion-icon>
                                    <ion-icon name={'' || item.iconUp}></ion-icon>
                                </Link>
                                <div className="NavLinks-Items">
                                    {item.childItems.map((child, index) => {
                                        return (
                                            <div key={index} className={child.classChildName}>
                                                <Link to={item.url}>{child.name}</Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                    <div className="NavLogin">
                    <Link to="/Login">Login</Link>
                    </div>
                </>
            )}
            
        </nav>
    )
}

export default Navbar