
import Contact from "./Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Front from "./Front";
import Game from "./Game";
import Special_Offer from "./Special_Offer";

function App() {
  return (
    <div className="App">
      <Front/>
      <Game/>
      <Special_Offer/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
