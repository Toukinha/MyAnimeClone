import React, { useState } from 'react';

export default function MenuDropDown() {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <nav>
      <ul>
        <li
          onMouseOver={ () => setActiveMenu(true) }
          onFocus={ () => setActiveMenu(true) }
          onBlur={ () => setActiveMenu(true) }
          onMouseOut={ () => setActiveMenu(false) }
        >
          <div className="menuTitle" href="l">Menu 1</div>
          {activeMenu && (
            <ul className="menuList">
              <li><a href="l">Submenu 1</a></li>
              <li><a href="l">Submenu 2</a></li>
              <li><a href="l">Submenu 3</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseOver={ () => setActiveMenu(true) }
          onFocus={ () => setActiveMenu(true) }
          onBlur={ () => setActiveMenu(true) }
          onMouseOut={ () => setActiveMenu(false) }
        >
          <div className="menuTitle" href="l">Menu 1</div>
          {activeMenu && (
            <ul className="menuList">
              <li><a href="l">Submenu 1</a></li>
              <li><a href="l">Submenu 2</a></li>
              <li><a href="l">Submenu 33</a></li>
            </ul>
          )}
        </li>
        <li
          onMouseOver={ () => setActiveMenu(true) }
          onFocus={ () => setActiveMenu(true) }
          onBlur={ () => setActiveMenu(true) }
          onMouseOut={ () => setActiveMenu(false) }
        >
          <div className="menuTitle" href="l">Menu 1</div>
          {activeMenu && (
            <ul className="menuList">
              <li><a href="l">Submenu 1</a></li>
              <li><a href="l">Submenu 2</a></li>
              <li><a href="l">Submenu 3</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
