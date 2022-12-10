import React from "react";
import iconSearch from "../../assets/search-icon.png";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
  return (
    <div
      className={`${styles.search} d-flex justify-content-around align-items-center gap-2`}
    >
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
      />
      <img
        src={iconSearch}
        alt=""
        className={styles.icon}
        onClick={props.onClick}
      />
    </div>
  );
}

export default SearchBar;
