/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Link from 'react-router-dom/Link';

function Menu() {
  return (
    <ul
      style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#c6c6c6' }}
    >
      <li>
        <Link to="/">SharedHome</Link>
      </li>
      <li>
        <Link to="/counter">SharedCounter</Link>
      </li>
      <li>
        <Link to="/about">SharedAbout</Link>
      </li>
    </ul>
  );
}

export default Menu;
