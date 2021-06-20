import React from 'react'
import { Icon, Input, Image, Menu, Dropdown, Container } from 'semantic-ui-react'
import '../Navbar/Navbar.css';

export default function SignedIn({ signOut }) {
    return (
        <div>
            <nav className='navbar'>
                <li className='nav-menu'>
                    <Container >
                        <Input
                            className='searchBar'
                            icon={<Icon name='search' inverted circular link />}
                            placeholder='Search...'
                        />                        
                    </Container>
                </li>

                <div className='profile'>
                    <Menu.Item position='right'>
                        <Image avatar spaced="right" src="https://res.cloudinary.com/gorkemblm/image/upload/v1623418067/file_oslkvg.jpg" />
                        <Dropdown pointing="top right"style={{color:'white'}} text="Görkem Bilim">
                            <Dropdown.Menu>
                                <Dropdown.Item text="Bilgilerim" icon="info" />
                                <Dropdown.Item text="Gelen Kutusu" icon="mail" />
                                <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </div>

            </nav>
        </div>
    )
}
