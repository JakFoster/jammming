import React from 'react';
import Styles from '../cssModules/searchBar.module.css'

function SearchBar(){

    function handleSubmit(){
        console.log('bob')
    }

    return (
        <form className={Styles.searchbar}onSubmit={handleSubmit}>
          <input type="text" placeholder="Search"/>
          <button onClick={handleSubmit}></button>
        </form>
    )
}

export default SearchBar;