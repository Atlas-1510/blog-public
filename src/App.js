import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-roboto flex flex-col items-center min-h-screen min-w-[360px]">
      <Header />
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
