import React from "react";
import styles from "./HomePage.module.css";
import NavBar from "../../components/Navbar/NavBar";
import DetailCard from "../../components/DetailCard/DetailCard";
import SectionCard from "../../components/SectionCard/SectionCard";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import useHomePage from "./useHomePage";
function HomePage() {
  const {
    latest,
    popular,
    handleChange,
    searchQuery,
    handleSubmit,
    searched,
    selectedMovie,
    // setSelectedMovie,
    selectMovie,
    // isLoading,
    play,
    handleSetPlay,
    username,
  } = useHomePage();
  return (
    <div className={`${styles.bg} bg`}>
      <NavBar
        placeholder={`Search your movies here`}
        username={username}
        search={searchQuery}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* {selectedMovie && console.log("selected >> ", selectedMovie)} */}
      {selectedMovie && (
        <DetailCard
          title={selectedMovie.title}
          overview={selectedMovie.overview}
          img={selectedMovie.poster_path}
          movie={selectedMovie}
          play={play}
          onClick={handleSetPlay}
        />
      )}
      {!selectedMovie && <DetailCard />}
      {!searched && (
        <SectionCard sectionTitle={"Popular Movies"}>
          {/* {popular && console.log("popular >>> ", popular)} */}
          {popular &&
            popular.map((item) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  movie={item}
                  img={item.poster_path}
                  onClick={selectMovie}
                />
              );
            })}
        </SectionCard>
      )}
      {!searched && (
        <SectionCard sectionTitle={"Latest Movies"}>
          {/* {latest && console.log("latest >> ", latest)} */}
          {latest &&
            latest.map((item) => {
              return (
                <Card
                  title={item.title}
                  img={item.poster_path}
                  movie={item}
                  key={item.id}
                  onClick={selectMovie}
                />
              );
            })}
        </SectionCard>
      )}

      {searched && (
        <SectionCard sectionTitle={"Searched Movies"}>
          {/* {searched && console.log("searched >>> ", searched)} */}
          {searched &&
            searched.map((item) => {
              return (
                <Card
                  title={item.title}
                  movie={item}
                  img={item.poster_path}
                  key={item.id}
                  onClick={selectMovie}
                />
              );
            })}
          {searched.length === 0 && (
            <p className="text-center d-flex justify-content-center align-items-center">
              No Movies Found
            </p>
          )}
        </SectionCard>
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
