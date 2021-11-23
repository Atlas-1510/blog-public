import React from "react";
import testProfileImage from "../../testImages/testProfileImage.png";

function CommentForm() {
  return (
    <div className="w-10/12">
      <form id="commentForm" className="flex flex-col items-end">
        <div className="flex flex-grow items-center w-full">
          <img
            src={testProfileImage}
            alt="user profile"
            className=" border-0 rounded-full w-14 h-14"
          />
          <textarea
            className="w-full border-0 rounded-lg overflow-hidden shadow-md ml-4 p-2"
            form="commentForm"
            placeholder="Add your comment here!"
          />
        </div>
        <input
          className="highlight-button mr-0 mt-4"
          type="submit"
          value="Post Comment"
        />
      </form>
    </div>
  );
}

export default CommentForm;
