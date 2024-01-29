import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import movieTrailer from "movie-trailer";

const ThemeContextProvider = (props) => {
    const handleClick = async (movie) => {
        try {
          if (trailerUrl) {
            setTrailerUrl("");
          } else {
            const url = await movieTrailer(movie?.name || "", { tmdbId: movie.id });
            if (url) {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            } else {
              console.log("No trailer found for", movie.name);
            }
          }
        } catch (error) {
          console.error("Error fetching trailer:", error);
        }
      };
      const [trailerUrl, setTrailerUrl] = useState("");
  const defaultValue = {
     handleClick,
    trailerUrl,
    setTrailerUrl
  };
  return (
    <ThemeContext.Provider value={defaultValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
