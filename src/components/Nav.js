import React, {Fragment, useState} from 'react'

const Nav = () => {

    const [checked, setChecked] = useState(false)

    const check = () => {
        if (checked === false){
            setChecked("checked")
        } else {
            setChecked(false)
        }
    }

    return (
        <Fragment>
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

        {/* BURGER-NAV */}
        <div className="burger">
        <input type="checkbox" className="burger__checkbox" checked={checked} onChange={check}></input>
        <span className="burger__button"></span>
        <nav className="burger__nav">
        <ul className="burger__list">
                <li className="burger__list--item">
                <a href="#home" onClick={check}>Home</a>
                    <span className="burger__list--item-underline"></span>
                </li>
                <li className="burger__list--item">
                    <a href="#about" onClick={check}>About</a>
                    <span className="burger__list--item-underline"></span>

                </li>
                <li className="burger__list--item">
                <a href="#explore" onClick={check}>Explore</a>
                <span className="burger__list--item-underline"></span>

                </li>
                <li className="burger__list--item">
                <a href="#contact" onClick={check}>Contact</a>
                <span className="burger__list--item-underline"></span>
                </li>
            </ul>
        </nav></div>
        </Fragment>
    )
}

export default Nav
