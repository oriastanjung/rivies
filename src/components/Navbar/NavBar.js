import React from "react";
import NavTitle from "../NavTitle/NavTitle";
import SearchBar from "../SearchBar/SearchBar";
import UserNav from "../UserNav/UserNav";

function NavBar(props) {
  return (
    <nav
      className={`d-flex align-items-center justify-content-between container py-2`}
    >
      <NavTitle />
      <div className={`d-flex align-items-center gap-5`}>
        <SearchBar
          placeholder={props.placeholder}
          value={props.search}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
        <UserNav username={props.username} />
      </div>
    </nav>
  );
}

export default NavBar;
