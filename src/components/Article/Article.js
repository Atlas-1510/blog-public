import { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import getFormattedDate from "../../utilities/getFormattedDate";
import CommentForm from "../CommentForm/CommentForm";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import parse from "html-react-parser";

// TODO: Replace 'loading' indicator with an actual spinning indicator

function Article() {
  const params = useParams();
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
            <span className="text-lg font-normal text-secondary">Article</span>
            <h1 className="text-3xl font-bold pt-3 pb-5 text-primary">
              {article.title}
            </h1>
            <div className="flex items-center">
              <img
                src={article.author.profileImage}
                alt="user profile"
                className=" border-0 rounded-full w-14 h-14"
              />
              <div className="mx-2">
                <p className="text-primary">{article.author.username}</p>
                <p className="text-primary">{formattedDate}</p>
              </div>
            </div>
          </div>
          <div className="my-10 prose text-left min-w-full">
            {parse(article.content)}
          </div>
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
