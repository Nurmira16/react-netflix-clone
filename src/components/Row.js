import { useEffect, useState } from "react";
import instance from "./axios";

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
    <>
      {title}
      <div className="movieTitles">
        {movies.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
    </>
  );
};
export default Row;
