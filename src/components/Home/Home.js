import Header from "../Header/Header";
import CardsContainer from "../CardsContainer/CardsContainer";

function Home() {
  return (
    <div className="font-roboto flex flex-col items-center min-w-[360px]">
      <Header />
      <CardsContainer />
    </div>
  );
}

export default Home;
