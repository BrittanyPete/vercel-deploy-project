import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
          <div>
        <h1>Create Your Lists!</h1>
        </div>
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/list'>My List</Link>
        </div>
      </div>
    );
}
export default Header;