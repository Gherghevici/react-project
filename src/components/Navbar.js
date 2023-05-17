import React, { useState, useContext } from 'react';
import { globalContext } from './Context/Context';
import styles from './Styles/navbar.module.css';

const Navbar = () => {
  const { products, searchInput, searchBtn } = useContext(globalContext);
  const [productData, setProductData] = products;
  const [search, setSearch] = searchInput;
  
  const [searchData, setSearchData]= searchBtn;
  return (
    <nav className={styles.navContainer}>
      <div>logo</div>
      <div>
        {productData.map((value, i) => {
          if (i % 5 === 0) {
            return (
              <div key={i} onClick={(e) => {}}>
                {value.category}
              </div>
            );
          }
        })}
      </div>
     <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
    <button onClick={() => setSearchData(`/search?q=${search}`)}> SEARCH</button>
      </nav>
  );
};

export default Navbar;
