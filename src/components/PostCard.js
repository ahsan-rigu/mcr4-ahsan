import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import {
  BiBookmarkAlt,
  BiCommentDetail,
  BiDownvote,
  BiShareAlt,
  BiSolidBookmarkAlt,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
  IconName,
} from "react-icons/bi";

const PostCard = ({
  post: {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
    upvoted,
    downvoted,
  },
}) => {
  const { dispatchUser } = useContext(UserContext);
  return (
    <article className="flex">
      <div className="vote-btns">
        {!upvoted ? (
          <BiUpvote
            onClick={() => dispatchUser({ type: "UPVOTE", postId })}
            size={"2rem"}
          />
        ) : (
          <BiSolidUpvote
            onClick={() => dispatchUser({ type: "UPVOTE", postId })}
            size={"2rem"}
          />
        )}
        {upvotes - downvotes + (upvoted || downvoted ? upvoted - downvoted : 0)}
        {!downvoted ? (
          <BiDownvote
            onClick={() => dispatchUser({ type: "DOWNVOTE", postId })}
            size={"2rem"}
          />
        ) : (
          <BiSolidDownvote
            onClick={() => dispatchUser({ type: "DOWNVOTE", postId })}
            size={"2rem"}
          />
        )}
      </div>
      <div>
        <div className="flex">
          <img src={picUrl} alt="pic" className="thumbnail" /> posted by{" "}
          <b>@{username}</b>
        </div>
        <h3>{post}</h3>
        <div className="flex">
          {tags.map((tag) => (
            <b key={tag}>{tag}</b>
          ))}
        </div>
        <p>{postDescription}</p>
        <div className="container-btn flex">
          <Link to={"/post/" + postId}>
            <BiCommentDetail size={"1.5rem"} />
          </Link>
          <BiShareAlt size={"1.5rem"} />
          {isBookmarked ? (
            <BiSolidBookmarkAlt
              onClick={() => dispatchUser({ type: "UNBOOKMARK", postId })}
              size={"1.5rem"}
            />
          ) : (
            <BiBookmarkAlt
              onClick={() => dispatchUser({ type: "BOOKMARK", postId })}
              size={"1.5rem"}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;
