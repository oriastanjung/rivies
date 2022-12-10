import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../components/Navbar/NavBar";
import DetailCard from "../../components/DetailCard/DetailCard";
import SectionCard from "../../components/SectionCard/SectionCard";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import useHomePage from "./useHomePage";
function HomePage() {
  const { latest, popular, handleChange, searchQuery, handleSubmit } =
    useHomePage();
  return (
    <div className={`${styles.bg} bg`}>
      <NavBar
        placeholder={`Search your movies here`}
        username={`User Rivies`}
        search={searchQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <DetailCard />
      <SectionCard sectionTitle={"Latest Movies"}>
        {/* {latest && console.log("latest >> ", latest)} */}
        {latest &&
          latest.map((item) => {
            return <Card title={item.title} img={item.poster_path} />;
          })}
      </SectionCard>
      <SectionCard sectionTitle={"Popular Movies"}>
        {/* {popular && console.log("popular >>> ", popular)} */}
        {popular &&
          popular.map((item) => {
            return <Card title={item.title} img={item.poster_path} />;
          })}
      </SectionCard>
      <Footer />
    </div>
  );
}

export default HomePage;
