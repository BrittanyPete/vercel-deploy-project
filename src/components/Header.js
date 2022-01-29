import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='header'>
          <div className='header-one'>
        <h1>Create Your Lists!</h1>
        </div>
        <div className='links'>
            <Link to='/home' className='link'>Home</Link>
            <Link to='/list' className='link'>My List</Link>
        </div>
      </div>

    );
}
export default Header;