import Banner from "./layout/Banner";
import Container from "./baseUI/Container";
import NavBar from "./layout/NavBar";
import Switch from "./baseUI/Switch";
import Section from "./layout/Section";
import SectionTitle from "./layout/Section/SectionTitle";
import Card from "./baseUI/Card";
import MovieList from "./components/Movie/MovieList";

function App() {
  const handleToggleValue = (selected) => {
    console.log(selected);
  };

  return (
    <>
      <header className="bg-tmdbDarkBlue">
        <NavBar />
      </header>
      <Container>
        <Banner />
        <Section>
          <div className="flex gap-5 items-center px-10">
            <SectionTitle title={`What's popular`} />
            <Switch
              items={["On TV", "In Theaters"]}
              onToggle={handleToggleValue}
            />
          </div>

          <div className="pt-5">
            <MovieList />
          </div>
        </Section>
      </Container>
    </>
  );
}

export default App;
