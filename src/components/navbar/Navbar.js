import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { NavbarItems } from "./NavbarItems";

function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [navbar, setNavbar] = useState(true);
	const [navSearch, setNavSearch] = useState(true);
	const [upToTop, setUpToTop] = useState(false);
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	const showSearchInput = () => {
		setNavSearch(!navSearch);
	};

	const toggleNavbar = () => {
		setToggleMenu(!toggleMenu);
	};

	const topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
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
			if (window.scrollY) {
				setNavbar(true);
				document.querySelector(".Navbar").classList.add("Top0");
				document.querySelector(".Container-Slider").style.marginTop = 0;
				setUpToTop(false);
			} else {
				setNavbar(false);
				document.querySelector(".Navbar").classList.remove("Top0");
				document.querySelector(".Container-Slider").style.marginTop =
					"var(--topNavHeight)";
				setUpToTop(true);
			}
		};
		window.addEventListener("scroll", changeBgNav);
		return () => {
			window.removeEventListener("scroll", changeBgNav);
		};
	}, []);

	useEffect(() => {
		const hiddenNav = () => {
			if (window.scrollY >= 80 && window.innerWidth <= 739) {
				document.querySelector(".Navbar").classList.add("hidden");
				setToggleMenu(false);
			} else {
				document.querySelector(".Navbar").classList.remove("hidden");
			}
		};
		window.addEventListener("scroll", hiddenNav);
		return () => {
			window.removeEventListener("scroll", hiddenNav);
		};
	}, []);

	return (
		<>
			<div className="NavLogin">
				<span>
					<p>
						<ion-icon name="mail-outline"></ion-icon>
						team3@gmail.com
					</p>
					<p>
						<ion-icon name="call-outline"></ion-icon>
						0329 711 504
					</p>
				</span>
				<Link to="/Login" onClick={toggleNavbar}>
					Login
				</Link>
			</div>
			<nav className={navbar ? "Navbar active" : "Navbar"}>
				<div className="NavLogo">
					<Link to="/">
						<img src="/image/logo/logo.jpg" alt="Navbar Logo" />
					</Link>
				</div>
				<div className="Mobile-Menu-Icon">
					<ion-icon
						name="search-outline"
						onClick={showSearchInput}
					></ion-icon>
					<ion-icon
						name="menu-outline"
						onClick={toggleNavbar}
					></ion-icon>
				</div>
				{(toggleMenu || screenWidth >= 740) && (
					<>
						<ul className="NavCenter">
							{NavbarItems.map((item, index) => {
								return (
									<li key={index}>
										<Link
											to={item.url}
											className={item.className}
											onClick={item.subNav && showSubnav}
										>
											<div>
												<span>{item.name}</span>
												<ion-icon
													name={"" || item.iconDown}
												></ion-icon>
											</div>
											<ul className={"NavLinks-Items"}>
												{item.subNav.map(
													(child, index2) => {
														return (
															<li
																key={index2}
																className={
																	child.subNavClass
																}
															>
																<Link
																	to={
																		child.url
																	}
																	onClick={
																		toggleNavbar
																	}
																>
																	{child.name}
																</Link>
															</li>
														);
													}
												)}
											</ul>
										</Link>
									</li>
								);
							})}
							<div className="NavLogin-Mobile">
								<Link to="/Login" onClick={toggleNavbar}>
									Login
								</Link>
							</div>
						</ul>
						<div className="NavSearch">
							<ion-icon
								name="search-outline"
								onClick={showSearchInput}
							></ion-icon>
						</div>
					</>
				)}
				<label
					className={
						navSearch ? "NavSearch-Input hidden" : "NavSearch-Input"
					}
				>
					<input placeholder="Search" />
					<ion-icon name="search-outline"></ion-icon>
				</label>
			</nav>
			<button
				onClick={topFunction}
				className={upToTop ? "btnUpToTop hidden" : "btnUpToTop"}
				title="Go to top"
			>
				<ion-icon name="chevron-up-outline"></ion-icon>
			</button>
		</>
	);
}

export default Navbar;
// onClick={toggleNavbar}
