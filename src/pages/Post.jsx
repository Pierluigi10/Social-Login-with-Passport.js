import React from "react";
import { useLocation } from "react-router";
import { posts } from "../data";

const Post = () => {
  // const post = posts[2];

  const location = useLocation();
  // console.log(location);

  const path = location.pathname.split("/")[2];
  // console.log(path);

  const post = posts.find((p) => p.id.toString() === path);
  // console.log(post);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
