import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../components/Navbar/NavBar";
import DetailCard from "../../components/DetailCard/DetailCard";
import SectionCard from "../../components/SectionCard/SectionCard";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
function HomePage() {
  return (
    <div className={`${styles.bg} bg`}>
      <NavBar />
      <DetailCard />
      <SectionCard sectionTitle={"Latest Movies"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionCard>
      <SectionCard sectionTitle={"Popular Movies"}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionCard>
      <Footer />
    </div>
  );
}

export default HomePage;
