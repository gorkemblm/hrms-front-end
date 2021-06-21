import React from 'react';
import '../Navbar/Button.css';
import { Link } from 'react-router-dom';

export function SıgnInButton({signIn}) {
  return (
    <Link to='sign-in'>
      <button onClick={signIn} className='button'>Giriş Yap</button>
    </Link>
  );
}
