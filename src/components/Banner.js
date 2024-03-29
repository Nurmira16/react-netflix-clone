import { useContext, useEffect, useState } from "react";
import instance from "./axios";
import requests from "./requests";
import "./Banner.css";
import { ThemeContext } from "./ThemeContext";


const Banner = () => {
  const{trailerUrl,handleClick}=useContext(ThemeContext)
  
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await instance.get(requests.fetchTrending);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
      return result;
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button onClick={()=>handleClick(movie)} className="banner_button">Play</button>
          
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade_bottom" />
    </header>
  );
};
export default Banner;
