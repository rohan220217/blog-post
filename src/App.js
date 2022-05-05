import BlogsPage from "./pages/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/scrollToTop";
import NewBlog from "./pages/NewBlog";
import BlogProvider from "./store/blogProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ScrollToTop />
        <BlogProvider>
          {" "}
          <Routes>
            <Route path="/" element={<BlogsPage />} />
            <Route path="/blog-detail" element={<BlogDetail />} />
            <Route path="/new-blog" element={<NewBlog />} />
          </Routes>
        </BlogProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
