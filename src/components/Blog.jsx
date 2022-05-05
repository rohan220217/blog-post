import classes from "./Blog.module.css";
import { useNavigate } from "react-router-dom";

const Blog = ({ post: { title, content, imgUrl, categories, id } }) => {
  const history = useNavigate();

  const openBlogDetail = () => {
    
    history("/blog-detail", { state: { title, content, imgUrl, categories, id } });
  };
  return (
    <div className={classes["blog-card"]} onClick={() => openBlogDetail()}>
      <h1>{title}</h1>
      <img className={classes["image"]} src={imgUrl} alt="blog" />
      <p>{content}</p>

      <h4>Categories: {categories}</h4>
    </div>
  );
};

export default Blog;
