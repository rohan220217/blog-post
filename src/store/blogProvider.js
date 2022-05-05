import { useReducer } from "react";
import { act } from "react-dom/test-utils";
import BlogContext from "./blog-context";

const DUMMY_DATA = [
  {
    id: "1",
    title: "JAVASCRIPT",
    content: `JavaScript is the world most popular 
            lightweight, interpreted compiled programming 
            language. It is also known as scripting 
            language for web pages. It is well-known for 
            the development of web pages, many non-browser 
            environments also use it. JavaScript can be 
            used for Client-side developments as well as 
            Server-side developments`,
    categories: "Computer Science ",
    imgUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },
  {
    id: "2",
    title: "Data Structure ",
    content: `There are many real-life examples of 
            a stack. Consider an example of plates stacked 
            over one another in the canteen. The plate 
            which is at the top is the first one to be 
            removed, i.e. the plate which has been placed 
            at the bottommost position remains in the 
            stack for the longest period of time. So, it 
            can be simply seen to follow LIFO(Last In 
            First Out)/FILO(First In Last Out) order.`,
    categories: "Data Structure and algorithm",
    imgUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
  },
  {
    id: "3",
    title: "Algorithm",
    content: `The word Algorithm means “a process 
            or set of rules to be followed in calculations 
            or other problem-solving operations”. Therefore 
            Algorithm refers to a set of rules/instructions 
            that step-by-step define how a work is to be 
            executed upon in order to get the expected 
            results. `,
    categories: "Computer Science",
    imgUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
  },
  {
    id: "4",
    title: "Computer Network",
    content: `An interconnection of multiple devices, 
            also known as hosts, that are connected using 
            multiple paths for the purpose of sending/
            receiving data media. Computer networks can 
            also include multiple devices/mediums which 
            help in the communication between two different 
            devices; these are known as Network devices
            and include things such as routers, switches,
            hubs, and bridges. `,
    categories: "Computer Fundamental",
    imgUrl:
      "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
  },
];

const defaultBlogState = {
  posts: DUMMY_DATA,
};

const blogReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedBlogs = [...state.posts];
    updatedBlogs.push(action.blog);
    return {
      posts: updatedBlogs,
    };
  }
  if (action.type === "REMOVE") {
    const existingBlogs = state.posts.filter((blog) => blog.id !== action.id);

    return {
      posts: existingBlogs,
    };
  }

  return defaultBlogState;
};

const BlogProvider = (props) => {
  const [postState, dispatchPostAction] = useReducer(
    blogReducer,
    defaultBlogState
  );

  const addPostHandler = (item) => {
    dispatchPostAction({ type: "ADD", blog: item });
  };

  const removePostHandler = (id) => {
    dispatchPostAction({ type: "REMOVE", id: id });
  };
  const editPostHandler = (id) => {
    dispatchPostAction({ type: "EDIT", id: id });
  };

  const blogContext = {
    posts: postState.posts,
    addPost: addPostHandler,
    removePost: removePostHandler,
    editPost: editPostHandler,
  };

  return (
    <BlogContext.Provider value={blogContext}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
