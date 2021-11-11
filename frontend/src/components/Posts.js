import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState([]);
  const [blog, setBlog] = useState([]);
  const [resource, setResource] = useState([]);

  const addPost = (e) => {
    e.preventDefault();
    // console.log(e.target.form[0]);

    axios
      .post("http://localhost:8000/blog", {
        title: e.target.form[0].value,
        body: e.target.form[1].value,
        date: String(new Date()).slice(0, 15),
      })
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
        setPost(res.data);
      });
  };

  const addHw = (e) => {
    e.preventDefault();
    // console.log(e.target.form[0].value);

    axios
      .post("http://localhost:8000/homework", {
        title: e.target.form[0].value,
      })
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
        setPost(res.data);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/${resource}`).then((res) => {
      setBlog(res.data);
      resource == "homework"
        ? console.log("it is hw")
        : console.log("it is blog");
      console.log(blog);
      console.log(resource);
    });
  }, [resource]);

  return (
    <div>
      {/* <form>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "center" }}>Create Post</h3>
          <input size={50} style={{margin:"10px" ,height: '3em'}} type="text" name="post" ></input>
          <button
            className="button"
            onClick={(e) => {
              addPost(e);
            }}
          >
            Post
          </button>
        </div>
        <br></br>

        {blog.map((p) => (
          <li>{p.body}</li>
        ))}
      </form> */}
      <br></br>
      <button
        onClick={() => setResource("blog")}
        class="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-800"
      >
        Post
      </button>
      <button
        onClick={() => setResource("homework")}
        class="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-800"
      >
        HW
      </button>

      <div style={{ background: "white" }}>
        {resource == "blog" ? (
          <div>
            <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
              New Post
            </div>

            <form>
              <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                {/* <input
              class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              spellcheck="false"
              placeholder="Title"
              type="text"
            /> */}
                <input
                  class="description bg-gray-100 sec p-7 h-20 border border-gray-300 outline-none"
                  spellcheck="false"
                  placeholder="Title"
                ></input>
                <input
                  class="description bg-gray-100 sec p-7 h-60 border border-gray-300 outline-none"
                  spellcheck="false"
                  placeholder="Describe everything about this post here"
                ></input>

                <br></br>

                <div class="buttons flex">
                  <button
                    onClick={(e) => {
                      addPost(e);
                    }}
                    class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
            <div>
              <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
                New Homework
              </div>
  
              <form>
                <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                  {/* <input
                class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellcheck="false"
                placeholder="Title"
                type="text"
              /> */}
                  <input
                    class="description bg-gray-100 sec p-7 h-20 border border-gray-300 outline-none"
                    spellcheck="false"
                    placeholder="Title"
                  ></input>
                  {/* <input
                    class="description bg-gray-100 sec p-7 h-60 border border-gray-300 outline-none"
                    spellcheck="false"
                    placeholder="Describe everything about this post here"
                  ></input> */}
  
                  <br></br>
  
                  <div class="buttons flex">
                    <button
                      onClick={(e) => {
                        addHw(e);
                      }}
                      class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                    >
                      Add HW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
      </div>
      {blog.map((p) => (
        <div>
          <div class="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
            <div class="mt-2">
              <a class="text-2xl text-gray-700 font-bold hover:text-gray-600">
                {p.title}
              </a>
              <p class="mt-2 text-gray-600">{p?.body}</p>
            </div>

            <div class="flex justify-between items-center">
              <span class="font-light text-sm text-gray-600">{p.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
