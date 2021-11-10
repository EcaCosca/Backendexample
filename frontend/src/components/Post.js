import axios from "axios";
import { useState } from "react";

export default function Post(props) {
  const [post, setPost] = useState(props);
  const [enableEdit, setEnableEdit] = useState(false);

  const [deleted, setDeleted] = useState(false);
  const deletePost = () => {
    axios.delete(`/posts/${post.id}`).then((res) => {
      setDeleted(true);
    });
  };
  const editCancel = () => {
    setEnableEdit(false);
    setPost(props);
  };
  const editSave = () => {
    axios.put(`/posts/${post.id}`, { ...post }).then((res) => {
      setPost(res.data);
      setEnableEdit(false);
    });
  };
  if (deleted) return <div></div>;
  if (enableEdit)
    return (
      <div className="post">
        <h1 className="inline">
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </h1>{" "}
        <small className="date">
          {new Date(post.date).toLocaleString("en-US")}
        </small>
        <p>
          <textarea
            rows="4"
            cols="50"
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          >
            {post.body}
          </textarea>
        </p>
        <button className="btn-primary" onClick={() => editSave()}>
          Save
        </button>
        <button className="btn" onClick={() => editCancel()}>
          Cancel
        </button>
      </div>
    );
  return (
    <div className="post">
      <h1 className="inline">{post.title}</h1>{" "}
      <small className="date">
        {new Date(post.date).toLocaleString("en-US")}
      </small>
      <p>{post.body}</p>
      <button className="btn-primary" onClick={() => setEnableEdit(true)}>
        Edit
      </button>
      <button className="btn-primary" onClick={() => deletePost()}>
        Delete
      </button>
    </div>
  );
}
