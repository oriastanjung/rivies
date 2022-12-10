import React from "react";
import LOGO from "../../assets/logo.png";
import styles from "./NavTitle.module.css";

function NavTitle() {
  return (
    <div>
      <img src={LOGO} alt="" className={styles.img} />
    </div>
  );
}

export default NavTitle;
