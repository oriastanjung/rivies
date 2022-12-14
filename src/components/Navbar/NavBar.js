import React, { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";
import SearchBar from "../SearchBar/SearchBar";
import UserNav from "../UserNav/UserNav";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`d-flex align-items-center justify-content-between container py-2 ${styles.nav}`}
    >
      <div className={styles.navcontainer}>
        <NavTitle />
        <div className={styles.menu} onClick={() => setShow(!show)}>
          <img
            src="https://img.icons8.com/ios-glyphs/240/menu--v1.png"
            alt=""
            width={"30px"}
            height={"30px"}
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
      </div>
      <div
        className={`d-flex align-items-center gap-5 ${styles.right} ${
          show ? styles.show : ""
        }`}
      >
        {show && (
          <div onClick={() => setShow(!show)}>
            <img
              src="https://img.icons8.com/windows/256/cancel.png"
              alt=""
              width={"40px"}
              height={"40px"}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        )}
        <SearchBar
          placeholder={props.placeholder}
          value={props.search}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
        {localStorage.getItem("token") ? (
          <UserNav
            username={props.username}
            onClick={() => navigate("/updateProfile")}
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ cursor: "pointer", fontSize: "20px", margin: 0 }}
            onClick={() => navigate("/login")}
          >
            <p className="m-0">Login</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
