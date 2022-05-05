import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Blog from "../components/Blog";
import classes from "./Blogs.module.css";
import BlogContext from "../store/blog-context";

function BlogsPage() {
  const history = useNavigate();

  const blogCtx = useContext(BlogContext);

  const openNewBlog = (event) => {
    event.preventDefault();
    history("/new-blog");
  };

  return (
    <main>
      <div className={classes["heading-container"]}>
        <h1 className={classes["heading"]}>Blog Post App (React)</h1>
        <button className={classes["new-button"]} onClick={openNewBlog}>
          New Post
        </button>
      </div>

      <div className={classes["container"]}>
        {blogCtx.posts.map((post, index) => (
          <Blog key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
export default BlogsPage;
