import React from "react";
import useAxios from "../../hooks/useAxios";

function Articles() {
  const { result: articles, error: isError } = useAxios(
    "http://localhost:1015/articles"
  );

  return (
    <div>
      {isError && <p>Something went wrong</p>}
      {articles.map((article) => (
        <li key={article._id}>{article.title}</li>
      ))}
    </div>
  );
}

export default Articles;
