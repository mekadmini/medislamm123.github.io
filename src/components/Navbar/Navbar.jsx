import React, { useState } from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <a className={styles.title} href="/">mekadmini</a>
                <div className={styles.menu}>
                    <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/menuIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-dash-button" width="40" onClick={() => setMenuOpen(!menuOpen)}></img>
                    {/* if the menu is open apply the corresponding style */}
                    <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )


}
