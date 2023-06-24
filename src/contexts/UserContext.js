import React, { createContext, useReducer } from "react";
import forumData from "../data/forumData";

export const UserContext = createContext();

const userReducer = (prevUser, { type, postId }) => {
  switch (type) {
    case "UPVOTE":
      prevUser.posts = prevUser.posts.map((post) =>
        post.postId === postId
          ? { ...post, upvoted: true, downvoted: false }
          : post
      );
      return { ...prevUser };
    case "DOWNVOTE":
      prevUser.posts = prevUser.posts.map((post) =>
        post.postId === postId
          ? { ...post, upvoted: false, downvoted: true }
          : post
      );
      return { ...prevUser };
    case "BOOKMARK":
      prevUser.posts = prevUser.posts.map((post) =>
        post.postId === postId ? { ...post, isBookmarked: true } : post
      );
      return { ...prevUser };
    case "UNBOOKMARK":
      prevUser.posts = prevUser.posts.map((post) =>
        post.postId === postId ? { ...post, isBookmarked: false } : post
      );
      return { ...prevUser };
    default:
      return { ...prevUser };
  }
};

const UserContextProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, forumData);

  return (
    <UserContext.Provider value={{ dispatchUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
