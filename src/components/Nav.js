import React from 'react'

const Nav = () => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">Drive Wild</div>
            <ul className="navigation__list">
                <li className="navigation__list--item">
                <a href="#home">Home</a>
                    <span className="navigation__list--item-underline"></span>
                </li>
                <li className="navigation__list--item">
                    <a href="#about">About</a>
                    <span className="navigation__list--item-underline"></span>

                </li>
                <li className="navigation__list--item">
                <a href="#explore">Explore</a>
                <span className="navigation__list--item-underline"></span>

                </li>
                <li className="navigation__list--item">
                <a href="#contact">Contact</a>
                <span className="navigation__list--item-underline"></span>

                </li>
            </ul>
        </nav>
    )
}

export default Nav
