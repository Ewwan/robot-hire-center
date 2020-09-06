import React from "react";

import './search-bar.styles.css';

const SearchBar = ({ onChange, placeholder }) => (
  <div className="search">
  <label htmlFor={placeholder} className="search_label">Filter Robots By: </label> 
    <div className="search-bar">
      <input className="search-bar_input" id={placeholder} type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  </div>
 );

export default SearchBar;
