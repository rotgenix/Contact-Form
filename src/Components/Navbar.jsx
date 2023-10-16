import React from 'react'

import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="logo">
                    <img className='logo-img' src="https://www.freeiconspng.com/thumbs/logo-design/logo-design-blank-circle-blue-and-orange-png-2.png" alt="" />
                </div>
                <ul className='navigation'>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar