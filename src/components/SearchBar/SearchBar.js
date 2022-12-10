import React from "react";
import iconSearch from "../../assets/search-icon.png";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
  return (
    <form
      className={`${styles.search} d-flex justify-content-around align-items-center gap-2`}
      onSubmit={props.onSubmit}
    >
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit">
        <img src={iconSearch} alt="" className={styles.icon} />
      </button>
    </form>
  );
}

export default SearchBar;
