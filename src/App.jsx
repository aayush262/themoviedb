import Banner from "./layout/Banner";
import Container from "./baseUI/Container";
import NavBar from "./layout/NavBar";
import Switch from "./baseUI/Switch";
import Section from "./layout/Section";
import SectionTitle from "./layout/Section/SectionTitle";

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
          <div className="flex gap-5 items-center">
            <SectionTitle title={`What's popular`} />
            <Switch
              items={["HI there long text", "Hi tehre another long text"]}
              onToggle={handleToggleValue}
            />
          </div>

          <div>Movie List</div>
        </Section>
      </Container>
    </>
  );
}

export default App;
