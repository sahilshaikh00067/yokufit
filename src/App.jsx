import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from './Components/Hero/ScrollToTop.jsx';
import Home from "./Components/Hero/Home.jsx";
import About from "./Components/Hero/About.jsx";
import Online from "./Components/Hero/Online.jsx";
import Offline from "./Components/Hero/Offline.jsx";
import Contact from "./Components/Hero/Contact.jsx";
import Blog from "./Components/Hero/Blog.jsx";
import SingleBlog from "./Components/Hero/SingleBlog.jsx";
import SingleArticle from "./Components/Hero/SingleArticle.jsx";
import Posts from "./Components/Hero/Posts.jsx";
import SinglePost from "./Components/Hero/SinglePost.jsx";
import SingleDownPost from "./Components/Hero/SingleDownPost.jsx";
import SingleYogaTherapy from "./Components/Hero/SingleYogaTherapy.jsx";
import Login from './Components/LoginRes/Login.jsx';
import Register from './Components/LoginRes/Register.jsx';

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("user");
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute><Layout><Home /></Layout></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><Layout><About /></Layout></PrivateRoute>} />
        <Route path="/online" element={<PrivateRoute><Layout><Online /></Layout></PrivateRoute>} />
        <Route path="/offline" element={<PrivateRoute><Layout><Offline /></Layout></PrivateRoute>} />
        <Route path="/blog" element={<PrivateRoute><Layout><Blog /></Layout></PrivateRoute>} />
        <Route path="/blog/:id" element={<PrivateRoute><Layout><SingleBlog /></Layout></PrivateRoute>} />
        <Route path="/articles/:id" element={<PrivateRoute><Layout><SingleArticle /></Layout></PrivateRoute>} />
        <Route path="/posts" element={<PrivateRoute><Layout><Posts /></Layout></PrivateRoute>} />
        <Route path="/posts/:id" element={<PrivateRoute><Layout><SinglePost /></Layout></PrivateRoute>} />
        <Route path="/postss/:id" element={<PrivateRoute><Layout><SingleDownPost /></Layout></PrivateRoute>} />
        <Route path="/yogatherapy/:id" element={<PrivateRoute><Layout><SingleYogaTherapy /></Layout></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Layout><Contact /></Layout></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
export default App;