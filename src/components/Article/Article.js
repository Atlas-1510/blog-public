import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import testProfileImage from "../../testImages/testProfileImage.png";
import getFormattedDate from "../../utilities/getFormattedDate";
import CommentForm from "../CommentForm/CommentForm";
import CommentsContainer from "../CommentsContainer/CommentsContainer";

// TODO: Replace 'loading' indicator with an actual spinning indicator

function Article() {
  const params = useParams();
  const user = useContext(UserContext);
  const { result: article, error: isError } = useAxios(
    `http://localhost:1015/articles/${params.articleID}`
  );
  const [triggerGetComments, setTriggerGetComments] = useState(true);

  const formattedDate = getFormattedDate(article.date);
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {isError && <p className="text-gray-400">Something went wrong</p>}
      {!isError && !article && <p className="text-gray-400">Loading</p>}
      {!isError && article && (
        <div className="flex flex-col items-center justify-center w-10/12 my-10">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-lg font-normal text-secondary-500">
              Article
            </span>
            <h1 className="text-3xl font-bold pt-3 pb-5 text-primary-900">
              {article.title}
            </h1>
            <div className="flex items-center">
              <img
                src={testProfileImage}
                alt="user profile"
                className=" border-0 rounded-full w-14 h-14"
              />
              <div className="mx-2">
                <p className=" text-primary-900">{article.author.username}</p>
                <p className=" text-primary-400">{formattedDate}</p>
              </div>
            </div>
          </div>
          <p className="my-10">{article.content}</p>
        </div>
      )}
      <CommentForm
        articleID={params.articleID}
        setTriggerGetComments={setTriggerGetComments}
      />
      <CommentsContainer
        articleID={params.articleID}
        triggerGetComments={triggerGetComments}
        setTriggerGetComments={setTriggerGetComments}
      />
    </div>
  );
}

export default Article;
