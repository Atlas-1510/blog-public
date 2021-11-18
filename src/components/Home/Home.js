import CardsContainer from "../CardsContainer/CardsContainer";

function Home() {
  return (
    <div className="font-roboto flex flex-col items-center min-w-[360px]">
      <div className="flex flex-col items-center justify-center m-4 p-8 border-b">
        <h1 className="text-3xl font-extrabold my-2 text-primary">
          From the blog
        </h1>
        <p className=" text-secondary mt-2 text-center">
          A collection of thoughts, musings, and random shouts into the void.
        </p>
      </div>
      <CardsContainer />
    </div>
  );
}

export default Home;
