import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import PostCard from "../components/PostCard";
import { BiArrowBack, BiComment, BiLike, BiShare } from "react-icons/bi";

const Post = () => {
  const { postId } = useParams();

  const {
    user: { posts },
  } = useContext(UserContext);

  const post = posts.find((post) => post.postId === postId);

  return (
    <div>
      <Link to="/" className="back">
        <BiArrowBack />
        Back
      </Link>
      <PostCard post={post} />
      {post.comments.map(
        ({ commentId, username, picUrl, likes, comment, createdAt }) => (
          <article key={commentId}>
            <div className="flex">
              <img src={picUrl} alt="pic" className="thumbnail" />
              <div className="comment-header">
                posted by <b>@{username}</b>
                <p>replying to @{post.username}</p>
              </div>
            </div>

            <p>{comment}</p>
            <div className="container-btn flex">
              <BiLike />
              <BiComment />
              <BiShare />
            </div>
          </article>
        )
      )}
    </div>
  );
};

export default Post;
