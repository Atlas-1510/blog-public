import React from "react";
import testProfileImage from "../../testImages/testProfileImage.png";
import getFormattedDate from "../../utilities/getFormattedDate";

function Comment({ comment }) {
  const formattedDate = getFormattedDate(comment.date);
  return (
    <div className="flex flex-col items-start bg-white border-0 rounded-lg shadow-md my-4 p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <img
            src={testProfileImage}
            alt="user profile"
            className=" border-0 rounded-full w-12 h-12"
          />
          <h2 className=" m-3 text-lg font-semibold text-highlight">
            {comment.author.username}
          </h2>
        </div>

        <p className=" text-secondary">{formattedDate}</p>
      </div>
      <p className="my-3">{comment.content}</p>
    </div>
  );
}

export default Comment;
