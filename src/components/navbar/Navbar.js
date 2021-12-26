
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../App.css'
import { NavbarItems } from './NavbarItems';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [navbar, setNavbar] = useState(true);
    // const [openChildMenu, setOpenChildMenu] = useState(false)

  const toggleNavbar = () => {
      setToggleMenu(!toggleMenu);
  };

  // const openChild = () => {
  //   setOpenChildMenu(!openChildMenu)
  // }

  // console.log(openChildMenu)

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

  useEffect(() => {
    const hiddenNav = () => {
    if(window.scrollY >= 80 && window.innerWidth <= 739) {
      document.querySelector('.Navbar').classList.add('hidden')
    }else {
      document.querySelector('.Navbar').classList.remove('hidden')
    }
  }
    window.addEventListener("scroll", hiddenNav);
    return () => {
      window.removeEventListener("scroll", hiddenNav);
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
            {(toggleMenu || screenWidth >= 740) && (
                <>
                    <ul className="NavCenter">
                    {NavbarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.className} onClick={toggleNavbar}>
                                    <div>
                                      <span>{item.name}</span>
                                      <ion-icon name={'' || item.iconDown}></ion-icon>
                                    </div>
                                </Link>
                                    <div className={'NavLinks-Items'} >
                                        {item.childItems.map((child, index2) => {
                                            return (
                                                <div key={index2} className={child.classChildName}>
                                                    <Link to={child.url} onClick={toggleNavbar}>{child.name}</Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </li>
                        )
                    })}
                    </ul>
                    <div className="NavLogin">
                      <Link to="/Login" onClick={toggleNavbar}>Login</Link>
                    </div>
                </>
            )}
            
        </nav>
    )
}

export default Navbar
// onClick={toggleNavbar}