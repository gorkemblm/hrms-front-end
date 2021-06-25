import React from 'react'
import { Icon, Input, Image, Menu, Dropdown, Container, Label } from 'semantic-ui-react'
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';

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
                        <Dropdown pointing="top right" style={{ color: 'white' }} text="Görkem Bilim">
                            <Dropdown.Menu>
                                <Dropdown.Item as={NavLink} to='/jobseeker' text="Bilgilerim" icon="info" />
                                <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </div>

            </nav>
        </div>
    )
}
