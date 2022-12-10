import React from "react";
import NavTitle from "../NavTitle/NavTitle";
import SearchBar from "../SearchBar/SearchBar";
import UserNav from "../UserNav/UserNav";

function NavBar() {
  return (
    <nav
      className={`d-flex align-items-center justify-content-between container py-2`}
    >
      <NavTitle />
      <div className={`d-flex align-items-center gap-5`}>
        <SearchBar placeholder={`Search your movies here`} />
        <UserNav username={`User Rivies`} />
      </div>
    </nav>
  );
}

export default NavBar;
