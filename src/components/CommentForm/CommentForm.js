import React, { useContext, useState } from "react";
import testProfileImage from "../../testImages/testProfileImage.png";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import { UserContext } from "../../App";

function CommentForm({ articleID, setTriggerGetComments }) {
  const user = useContext(UserContext);
  const { storedValue: token } = useLocalStorage("jwt", null);
  const [commentInput, setCommentInput] = useState("");
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const content = e.target[0].value;
    try {
      const result = await axios.post(
        "http://localhost:1015/comments/",
        {
          content,
          article: articleID,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(result);
      setCommentInput("");
      setTriggerGetComments(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-10/12 flex justify-center items-center">
      {user && (
        <form
          onSubmit={(e) => handleCommentSubmit(e)}
          id="commentForm"
          className="flex flex-col items-end flex-grow"
        >
          <div className="flex flex-grow items-center w-full">
            <img
              src={testProfileImage}
              alt="user profile"
              className=" border-0 rounded-full w-14 h-14"
            />
            <textarea
              className="w-full border-0 rounded-lg shadow-md ml-4 p-2 resize-none overflow-scroll"
              form="commentForm"
              placeholder="Add your comment here!"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
          </div>
          <input
            className="highlight-button mr-0 mt-4"
            type="submit"
            value="Post Comment"
          />
        </form>
      )}
      {!user && (
        <p className="text-secondary text-xl">Sign in to post a comment</p>
      )}
    </div>
  );
}

export default CommentForm;
