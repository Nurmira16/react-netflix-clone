import Row from "./components/Row";
import requests from "./components/requests";

function App() {
  return (
    <div className="App">
      <p>Netflix Clone</p>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
