import React from 'react';
import '../Navbar/Button.css';
import { Link } from 'react-router-dom';

export function SignUpButton() {
  return (
    <Link to='sign-up'>
      <button className='button'>Kayıt Ol</button>
    </Link>
  );
}
