import React, { useEffect, useState } from "react";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1015/articles")
      .then((res) => res.json())
      .then((fetched_articles) => setArticles(fetched_articles))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <li>{article.title}</li>
      ))}
    </div>
  );
}

export default Articles;
