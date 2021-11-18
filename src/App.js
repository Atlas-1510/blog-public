import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-roboto flex flex-col min-h-screen">
      <Header />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
