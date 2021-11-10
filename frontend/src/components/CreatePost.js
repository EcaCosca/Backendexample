import axios from "axios";
import { useState } from "react";

export function CreatePost({ addPost }) {
  const [post, setPost] = useState({});
  const submitPost = () => {
    axios.post("/posts", { ...post, date: new Date() }).then((res) => {
      addPost(res.data);
    });
  };
  return (
    <div className="post">
      <h1>Create New Post</h1>
      <p>Title:</p>
      <p>
        <input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </p>
      <p>Body:</p>
      <p>
        <textarea
          rows="4"
          cols="50"
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        >
          {post.body}
        </textarea>
      </p>

      <button className="btn-primary" onClick={() => submitPost()}>
        Submit
      </button>
    </div>
  );
}
