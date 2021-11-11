import axios from "axios";
import { useState, useEffect } from "react";

function Homework() {
  const [homework, setHomework] = useState([]);
  const [ifOn, setIfOn] = useState(false);
  const [saveId, setSaveID] = useState();
  useEffect(() => {
    axios.get("http://localhost:3001/homework/getHomework").then((res) => {
      console.log(res.data);
      setHomework(res.data);
    });
  }, []);

  function add(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    let title = e.target[0].value;
    let link = e.target[1].value;
    let description = e.target[2].value;

    axios
      .post("http://localhost:3001/homework/post", {
        data: { title: title, link: link, description: description },
      })
      .then((res) => {
        console.log("add Sucsesful" + res);
        setHomework(res.data);
      });
  }

  function updateItem(e, id) {
    e.preventDefault();
    setIfOn(true);
    setSaveID(id);
  }

  function putData(e) {
    e.preventDefault();
    let title = e.target[0].value;
    let link = e.target[1].value;
    let description = e.target[2].value;
    axios
      .put(`http://localhost:3001/homework/put/${saveId}`, {
        data: { title: title, link: link, description: description },
      })

      .then((res) => {
        console.log(res.data);
        setHomework(res.data);
      });
  }
  // .
  function deleteItem(e, id) {
    e.preventDefault();
    console.log("test button" + id);

    axios.delete(`http://localhost:3001/homework/delete/${id}`).then((res) => {
      console.log(res.data);
      setHomework(res.data);
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          add(e);
        }}
      >
        <input placeholder="title"></input>
        <br></br>
        <input placeholder="link"></input>
        <br></br>
        <input placeholder="description"></input>
        <br></br>
        <button type="submit"> Add Homework </button>
      </form>

      {(function form() {
        if (ifOn == true) {
          return (
            <form
              onSubmit={(e) => {
                putData(e);
              }}
            >
              <input placeholder="title"></input>
              <br></br>
              <input placeholder="link"></input>
              <br></br>
              <input placeholder="description"></input>
              <br></br>
              <button type="submit"> Save </button>
            </form>
          );
        }
      })()}
      {homework.map((item) => {
        return (
          <div>
            <h6>id: {item.id}</h6>
            <h4>Title: {item.title}</h4>
            <p>Link: {item.link}</p>
            <h4>description : {item.description}</h4>
            <button
              onClick={(e) => {
                deleteItem(e, item.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                updateItem(e, item.id, item.title, item.link, item.description);
              }}
            >
              Update
            </button>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Homework;
