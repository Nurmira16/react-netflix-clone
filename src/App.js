import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./components/requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
