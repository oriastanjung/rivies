import React from "react";
import avatar from "../../assets/avatar.png";
import styles from "./UserNav.module.css";
function UserNav(props) {
  return (
    <div className={`d-flex justify-content-center align-items-center gap-3`}>
      <h4 className={styles.username}>{props.username}</h4>
      <div className={styles.picture}>
        <img src={avatar} alt="" onClick={props.onClick} />
      </div>
    </div>
  );
}

export default UserNav;
