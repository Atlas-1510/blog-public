import React from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../Card/Card";

function Articles() {
  const { result: articles, error: isError } = useAxios(
    "http://localhost:1015/articles"
  );

  return (
    // Added custom grid-cols-cardLayout to tailwind config
    <div className="grid justify-items-center gap-4 m-4 grid-cols-cardLayout flex-grow w-10/12">
      {isError && <p className="text-gray-400">Something went wrong</p>}
      {!isError &&
        articles &&
        articles.map((article) => <Card article={article} />)}
    </div>
  );
}

export default Articles;
