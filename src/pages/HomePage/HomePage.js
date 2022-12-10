import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../components/Navbar/NavBar";
import DetailCard from "../../components/DetailCard/DetailCard";
function HomePage() {
  return (
    <div className={`${styles.bg} bg`}>
      <NavBar />
      <DetailCard />
    </div>
  );
}

export default HomePage;
