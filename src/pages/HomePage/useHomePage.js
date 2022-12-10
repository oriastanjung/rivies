import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLatest,
  fetchPopular,
} from "../../store/reducer/movies/moviesSlice";
function useHomePage() {
  const dispatch = useDispatch();
  const { latest, popular } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search >> ", searchQuery);
  };
  useEffect(() => {
    dispatch(fetchLatest());
    dispatch(fetchPopular());
  }, []);
  return { latest, popular, searchQuery, handleChange, handleSubmit };
}

export default useHomePage;
