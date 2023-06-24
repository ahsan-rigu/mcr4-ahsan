import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-page">
        <Sidebar />
        <Routes>
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
