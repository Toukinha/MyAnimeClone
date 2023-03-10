import React from 'react';
import './css/Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import MenuDropDown from './MenuDropDown';

export default function Header() {
  return (
    <div className="headerContainer">
      <header>
        <Link to="/"><img src="https://fontmeme.com/permalink/230301/a3a5ba1883fa4d9939836a3559be5f0b.png" alt="fonte-de-haikyu" border="0" /></Link>
      </header>
      <div className="menuNav">
        <MenuDropDown />
        <div className="searchBar">
          <select name="filterType" id="filterType">
            <option value="Anime">Anime</option>
            <option value="Manga">Manga</option>
            <option value="Characters">Characters</option>
          </select>
          <input type="text" className="searchInput" />
          <button
            type="button"
            className="searchBtn"
            aria-label="search"
          >
            <AiOutlineSearch />

          </button>
        </div>
      </div>
    </div>
  );
}
