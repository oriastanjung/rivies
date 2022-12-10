import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLatest,
  fetchPopular,
  fetchBySearch,
} from "../../store/reducer/movies/moviesSlice";
function useHomePage() {
  const dispatch = useDispatch();
  const { latest, popular, searched } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search >> ", searchQuery);
    dispatch(fetchBySearch(searchQuery));
  };
  useEffect(() => {
    if (!searchQuery) {
      dispatch(fetchLatest());
      dispatch(fetchPopular());
      setSelectedMovie(popular[0]);
    } else {
      dispatch(fetchBySearch(searchQuery));
      setSelectedMovie(searched[0]);
    }
  }, [searchQuery]);

  return {
    latest,
    popular,
    searchQuery,
    handleChange,
    handleSubmit,
    searched,
    selectedMovie,
    setSelectedMovie,
  };
}

export default useHomePage;
