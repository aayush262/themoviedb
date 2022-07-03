import Banner from "./layout/Banner";
import Container from "./baseUI/Container";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <>
      <header className="bg-tmdbDarkBlue">
        <NavBar />
      </header>
      <Container>
        <Banner />
      </Container>
    </>
  );
}

export default App;
