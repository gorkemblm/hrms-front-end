import React, { useState } from 'react'
import '../Navbar/Navbar.css';
import { SignUpButton } from './SignUpButton';
import { SıgnInButton } from './SignInButton';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';


export default function SignedOut( {signIn} ) {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    return (
        <div>
            <nav className='navbar'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Hizmetlerimiz <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/jobAdvertisements'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            İlanlarımız
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/contact-us'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            İletişim
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Bize Katıl
                        </Link>
                    </li>
                </ul>
                <SignUpButton />
                <SıgnInButton signIn={signIn}/>
            </nav>
        </div>
    )
}
