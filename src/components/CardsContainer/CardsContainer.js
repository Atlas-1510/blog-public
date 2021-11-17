import React from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../Card/Card";

function Articles() {
  const { result: articles, error: isError } = useAxios(
    "http://localhost:1015/articles"
  );

  return (
    <div>
      {isError && <p>Something went wrong</p>}
      {articles.map((article) => (
        <Card article={article} />
      ))}
    </div>
  );
}

export default Articles;
