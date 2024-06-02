import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QualitySound from "./components/QualitySound/QualitySound";
import Reviews from "./components/Reviews/Reviews";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Reviews />
      <QualitySound />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
