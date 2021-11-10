import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./components/Post";
import { CreatePost } from "./components/CreatePost";
import Homework from "./components/Homework";
import { CreateHomework } from "./components/CreateHomework";
axios.defaults.baseURL = "http://localhost:8080";

function App() {
  const [posts, setPosts] = useState([]);
  const [homeworks, setHomeworks] = useState([]);
  const [active, setActive] = useState("posts");
  useEffect(() => {
    axios.get("/posts").then((res) => {
      setPosts(res.data);
    });
    axios.get("/homeworks").then((res) => {
      setHomeworks(res.data);
    });
  }, []);
  return (
    <div>
      <button className={active ==="posts" ? "btn-primary" : "btn"} onClick={() => setActive("posts")}>Posts</button> <button className={active ==="homeworks" ? "btn-primary" : "btn"} onClick={() => setActive("homeworks")} class="btn">homeworks</button>
      {active === "posts" ? 
      <div>
        {posts.map((post) => (
          <Post {...post} />
        ))}

      <CreatePost addPost={(post) => setPosts([...posts, post])} />
  
      </div>
    :
    <div>
        {homeworks.map((post) => (
          <Homework {...post} />
        ))}

      <CreateHomework addPost={(homework) => setHomeworks([...homeworks, homework])} />
  
      </div>
    }
   </div>
  );
}

export default App;
