import React from "react";
import testImage from "../../testImages/testImage.jpeg";
import testProfileImage from "../../testImages/testProfileImage.png";

function Article({ article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      key={article._id}
      className="w-[300px] h-96 border-0 rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <div
        className="w-full h-32 bg-center bg-cover"
        style={{ backgroundImage: `url(${testImage})` }}
      ></div>
      <div className="m-4 flex-grow flex flex-col">
        <p className="text-sm font-normal text-secondary-500">Article</p>
        <h2 className="text-xl font-bold py-2 text-primary-900">
          {article.title}
        </h2>
        <div className="flex flex-col justify-between flex-grow">
          <p className="text-primary-400 text-sm">{article.description}</p>
          <div className="flex">
            <img
              src={testProfileImage}
              alt="user profile"
              className=" border-0 rounded-full w-10 h-10"
            />
            <div className="mx-2">
              <p className="text-sm text-primary-900">
                {article.author.username}
              </p>
              <p className="text-sm text-primary-400">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
