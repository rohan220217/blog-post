import React from "react";

const BlogContext = React.createContext({
  posts: [],
  addPost: (item) => {},
  removePost: (id) => {},
  editPost: (id) => {},
});

export default BlogContext;
