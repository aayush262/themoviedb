import Banner from "./layout/Banner";
import Container from "./baseUI/Container";
import NavBar from "./layout/NavBar";
import Switch from "./baseUI/Switch";
import Section from "./layout/Section";
import SectionTitle from "./layout/Section/SectionTitle";
import MovieList from "./components/Movie/MovieList";
import { useState } from "react";

function App() {
  const [selectedItem, setItem] = useState("On TV");

  const handleToggleValue = (selected) => {
    setItem(selected);
  };

  return (
    <>
      <header className="bg-tmdbDarkBlue">
        <NavBar />
      </header>
      <Container>
        <Banner />
        <Section>
          <div className="relative">
            <div className="flex gap-5 items-center px-10">
              <SectionTitle title={`What's popular`} />
              <Switch
                items={["On TV", "In Theaters"]}
                onToggle={handleToggleValue}
                isToggled={selectedItem === "On TV" ? false : true}
              />
            </div>
            <div className="pt-5">
              <MovieList item={selectedItem} />
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}

export default App;
