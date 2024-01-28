import { useEffect, useState } from "react";
import instance from "./axios";
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get(fetchUrl);
      setMovies(data.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row_posters">
        {movies.map((item) => (
          <img
            key={item.id}
            className="row_poster"
            src={`${base_url}${item.poster_path}`}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
};
export default Row;
