import React, { useContext, useState, useReducer } from "react";
import testProfileImage from "../../testImages/testProfileImage.png";
import axios from "axios";
import useLocalStorage from "../../hooks/useLocalStorage";
import { UserContext } from "../../App";
import { objectExpression } from "@babel/types";

const flashReducer = (state, action) => {
  switch (action.type) {
    case "FLASH":
      if (Array.isArray(action.payload)) {
        return action.payload || false;
      } else {
        return [action.payload] || false;
      }
    case "RESET":
      return "";
    default:
      throw new Error("Reducer dispatch type not found");
  }
};

function CommentForm({ articleID, setTriggerGetComments }) {
  const user = useContext(UserContext);
  const { storedValue: token } = useLocalStorage("jwt", null);
  const [commentInput, setCommentInput] = useState("");
  const [flash, dispatch] = useReducer(flashReducer, "");
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
    const content = e.target[0].value;
    if (content === "") {
      dispatch({ type: "FLASH", payload: "Please enter your comment" });
      return;
    }
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
      if (result.data.message) {
        dispatch({ type: "FLASH", payload: result.data.message });
      } else if (result.data.errors) {
        const errors = result.data.errors.map((obj) => obj.msg);
        dispatch({ type: "FLASH", payload: errors });
      } else {
        console.log(result);
        setCommentInput("");
        setTriggerGetComments(true);
      }
    } catch (err) {
      console.log(err);
      dispatch({ type: "FLASH", payload: err.message });
    }
  };
  return (
    <div className="w-10/12 flex justify-center items-center">
      {user && (
        <form
          onSubmit={(e) => handleCommentSubmit(e)}
          id="commentForm"
          className="flex flex-grow"
        >
          <img
            src={testProfileImage}
            alt="user profile"
            className=" border-0 rounded-full w-14 h-14 mt-2"
          />
          <div className="ml-4 w-full flex flex-col">
            <div className="flex flex-grow items-center w-full">
              <textarea
                className="w-full border-0 rounded-lg shadow-md p-2 resize-none overflow-scroll"
                form="commentForm"
                placeholder="Add your comment here!"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
            </div>
            <div className="flex justify-between w-full">
              {!flash && <p></p>}
              {flash &&
                flash.map((msg) => (
                  <p className="text-highlight empty:h-6 my-2">{msg}</p>
                ))}
              <input
                className="highlight-button mr-0 mt-4"
                type="submit"
                value="Post Comment"
              />
            </div>
          </div>
        </form>
      )}
      {!user && (
        <p className="text-secondary text-xl">Sign in to post a comment</p>
      )}
    </div>
  );
}

export default CommentForm;
