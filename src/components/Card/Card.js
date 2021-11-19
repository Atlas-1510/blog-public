import React from "react";
import testImage from "../../testImages/testImage.jpeg";
import testProfileImage from "../../testImages/testProfileImage.png";
import { Link } from "react-router-dom";
import getFormattedDate from "../../utilities/getFormattedDate";

function Article({ article }) {
  const formattedDate = getFormattedDate(article.date);
  return (
    <Link key={article._id} to={`/articles/${article._id}`}>
      <div className="w-[300px] h-96 border-0 rounded-lg overflow-hidden shadow-lg flex flex-col bg-white">
        <div
          className="w-full h-32 bg-center bg-cover"
          style={{ backgroundImage: `url(${testImage})` }}
        ></div>
        <div className="m-4 flex-grow flex flex-col">
          <p className="text-sm font-normal text-highlight">Article</p>
          <h2 className="text-xl font-bold py-2 text-primary">
            {article.title}
          </h2>
          <div className="flex flex-col justify-between flex-grow">
            <p className="text-secondary text-sm">{article.description}</p>
            <div className="flex items-center">
              <img
                src={testProfileImage}
                alt="user profile"
                className=" border-0 rounded-full w-10 h-10"
              />
              <div className="mx-2">
                <p className="text-sm text-primary">
                  {article.author.username}
                </p>
                <p className="text-sm text-secondary">{formattedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Article;
