import React from "react";
import { useParams } from "react-router";

function Article() {
  const params = useParams();
  return <div>This is an article component, ID is {params.articleID}</div>;
}

export default Article;
