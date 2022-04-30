import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <section className="navLinks">
        <div>
          <NavLink to="./">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/back.png" alt="back" />
          </NavLink>
        </div>
        <div className="navIcons">
          <img className="navIcon" src="https://img.icons8.com/fluency-systems-filled/24/ffffff/microphone.png" alt="mic" />
          <img className="navIcon" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/ffffff/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png" alt="settings" />
        </div>
      </section>
    </nav>
  );
}

export default NavBar;
