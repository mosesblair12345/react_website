import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Analytics from "./components/Analytics/Analytics";
import Newsletter from "./components/newsletter/Newsletter";
import Cards from "./components/Cards/Cards";
import Footer from "./components/footer/footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
