import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import PostCard from "../components/PostCard";

const Posts = () => {
  const { user } = useContext(UserContext);
  const [sort, setSort] = useState("latest");
  const posts = [...user.posts];

  if (sort === "popular") {
    console.log(posts);
    posts.sort((a, b) => b.upvotes - b.downvotes - a.upvotes + a.downvotes);
    console.log(posts);
  }

  return (
    <>
      <div>
        {posts.map((post) => (
          <PostCard key={post.postId} post={post} />
        ))}
      </div>
      <aside className="sidebar-right">
        <select
          name="cars"
          id="cars"
          defaultValue={"latest"}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="latest">Show Latest</option>
          <option value="popular">Show Popular</option>
        </select>
      </aside>
    </>
  );
};

export default Posts;
