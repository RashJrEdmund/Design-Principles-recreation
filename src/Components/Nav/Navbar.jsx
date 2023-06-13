import React from 'react';
import StyledNavBar from './StyledNavbas';

export default function Navbar() {
  return (
    <StyledNavBar>
      <section className="section_1">
        <h1 id="logo">Logo</h1>

        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
          <li>Support</li>
        </ul>
      </section>

      <div className="cta">
        <button className="login_btn" type="button">
          Login
        </button>
        <button className="signup_btn" type="button">
          Signup
        </button>
      </div>
    </StyledNavBar>
  );
}
