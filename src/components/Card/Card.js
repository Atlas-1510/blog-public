import React from "react";

function Article({ article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div key={article._id}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.author.username}</p>
      <p>{formattedDate}</p>
    </div>
  );
}

export default Article;
