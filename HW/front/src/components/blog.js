import React, { useState, useEffect } from "react";
import axios from "axios";

function Blog(props) {
  const [data, setData] = useState([]);

  // Edit Input varbile
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Post Varible
  const [ptitle, psetTitle] = useState("");
  const [pdescription, psetDescription] = useState("");

  //GET
  useEffect(() => {
    axios.get("http://localhost:3001/blog").then((res) => {
      setData(res.data);
    });
  }, [data]);
  //POST
  const handleClick = () => {
    let obj = {
      title: ptitle,
      description: pdescription,
    };

    axios.post("http://localhost:3001/blog", obj).then((res) => {
      setData(res.data);
      psetTitle("");
      psetDescription("");
    });
  };
  const handelEdit = (e) => {
    let obj = {
      id: e.id,
      title: !title ? e.title : title,
      description: !description ? e.description : description,
    };

    axios.put("http://localhost:3001/blog", obj).then((res) => {
      setData(res.data);
      setTitle("");
      setDescription("");
    });
  };

  //Delete
  const handelRemove = (id) => {
    axios.delete(`http://localhost:3001/blog/${id}`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <div className="flex justify-center">
        <input
          placeholder="Title ..."
          value={ptitle}
          onChange={(e) => psetTitle(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <input
          placeholder="Description ..."
          value={pdescription}
          onChange={(e) => psetDescription(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
        />

        <button
          className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
          onClick={handleClick}
        >
          POST
        </button>
      </div>
      <br />
      <br />

      <div className="grid grid-flow-cols grid-cols-3 gap-2 ">
        {data.map((e, i) => {
          return (
            <div
              id="whoobe-3fery"
              className="w-full md:w-90 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col"
            >
              <div
                id="whoobe-1okdg"
                className="w-full p-4 justify-start flex flex-col"
              >
                <h4 className="border-b-2 text-3xl" id="whoobe-3mr7n">
                  {e.title}
                </h4>
                <h3 className="">Description:</h3>
                <p className="my-4" id="whoobe-950fw">
                  {e.description}{" "}
                </p>

                <br />
                <input
                  value={!title ? e.title : title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="px-4 py-2 m-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <input
                  value={!description ? e.description : description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="px-2 py-2 m-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />

                <button
                  className="p-2 pl-5 pr-5 m-2 bg-yellow-500 text-gray-100 text-lg rounded-lg focus:border-4 border-yellow-300"
                  onClick={() => handelEdit(e)}
                >
                  Edit
                </button>
                <button
                  className="p-2 pl-5 pr-5 m-2 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300"
                  onClick={() => handelRemove(e.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
}

export default Blog;
