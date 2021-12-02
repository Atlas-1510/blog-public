import React from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../Card/Card";

function CardsContainer() {
  const { result: articles, error: isError } = useAxios(
    `${process.env.REACT_APP_API_LOCALHOST_PORT}/articles`
  );

  return (
    // Added custom grid-cols-cardLayout to tailwind config
    <div className="m-4 flex-grow w-10/12">
      {isError && (
        <p className="text-gray-400 text-center text-xl">
          Something went wrong
        </p>
      )}
      {!isError && !articles && (
        <p className="text-gray-400 text-center text-xl">Loading</p>
      )}
      <div className="grid justify-items-center gap-4  grid-cols-cardLayout ">
        {!isError &&
          articles &&
          articles.map((article) => (
            <Card key={article._id} article={article} />
          ))}
      </div>
    </div>
  );
}

export default CardsContainer;
