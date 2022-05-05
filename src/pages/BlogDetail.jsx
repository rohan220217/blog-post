import React, { useContext } from "react";
import classes from "./BlogDetail.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import BlogContext from "../store/blog-context";

const BlogDetail = () => {
  const { state: blog } = useLocation();
  const blogCtx = useContext(BlogContext);
  const history = useNavigate();

  const backButtonHandler = (event) => {
    event.preventDefault();
    history(-1);
  };
  const deleteButtonHandler = (event) => {
    event.preventDefault();
    blogCtx.removePost(blog.id);
    history(-1);
  };
  const updateButtonHandler = (event) => {
    event.preventDefault();
    history("/new-blog", {
      state: { blog },
    });
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["button-container"]}>
        <button className={classes["back-button"]} onClick={backButtonHandler}>
          {" "}
          Back
        </button>
        <div>
          <button
            className={classes["back-button"]}
            onClick={updateButtonHandler}
          >
            {" "}
            Update
          </button>{" "}
          <button
            className={classes["back-button"]}
            onClick={deleteButtonHandler}
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
      <h1>{blog.title}</h1>
      <h4>Categories: {blog.categories}</h4>
      <img className={classes["image"]} src={blog.imgUrl} alt="blog" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
