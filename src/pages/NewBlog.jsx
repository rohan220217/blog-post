import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import BlogContext from "../store/blog-context";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./NewBlog.module.css";

const NewBlog = () => {
  const history = useNavigate();
  const blogCtx = useContext(BlogContext);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredCategories: "",
    enteredContent: "",
    enteredImageUrl: "",
  });



  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const categoriesChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredCategories: event.target.value });
  };
  const contentChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredContent: event.target.value });
  };
  const imageUrlChangeHandler = (event) => {
    setUserInput({ ...userInput, enteredImageUrl: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Check empty case
    if (
      userInput.enteredTitle.trim().length === 0 ||
      userInput.enteredContent.trim().length === 0 ||
      userInput.enteredImageUrl.trim().length === 0 ||
      userInput.enteredCategories.trim().length === 0
    ) {
      toast.error("Please type a valid value", {
        position: toast.POSITION.TOP_CENTER,
      });

      return;
    }

    const blogData = {
      id: Date.now(),
      title: userInput.enteredTitle,
      content: userInput.enteredContent,
      categories: userInput.enteredCategories,
      imageUrl: userInput.enteredImageUrl,
    };

    blogCtx.addPost(blogData);
    setUserInput({
      enteredTitle: "",
      enteredCategories: "",
      enteredImageUrl: "",
      enteredContent: "",
    });
    history(-1);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className={classes["heading"]}>Create New Post</h1>

      <div className={classes["form-container"]}>
        <div className={classes["form-control"]}>
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Categories</label>
          <input
            type="text"
            value={userInput.enteredCategories}
            onChange={categoriesChangeHandler}
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Image Url</label>
          <input
            type="text"
            value={userInput.enteredImageUrl}
            onChange={imageUrlChangeHandler}
          />
        </div>
        <div className={classes["form-control"]}>
          <label>Content</label>
          <textarea
            type="text"
            value={userInput.enteredContent}
            onChange={contentChangeHandler}
            rows="4"
            cols="50"
          />
        </div>

        <button type="submit" className={classes["add-button"]}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default NewBlog;
