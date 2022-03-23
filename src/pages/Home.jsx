import React from "react";
import Card from "../components/Card";
import { posts } from "../data";

const Home = () => {
  return (
    <div>
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </div>
  );
};

export default Home;
