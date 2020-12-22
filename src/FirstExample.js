import Axios from "axios";
import React, { useState, useEffect } from "react";
import Data from "./Data";

const FirstExample = () => {
  const [data, setData] = useState({
    isloading: false,
    todos: [],
    checkbtn: false,
  });
  const { isloading, todos, checkbtn } = data;
  const ShowData = () => {
    setData({ ...data, checkbtn: true });
  };
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setData({ ...data, isloading: true, todos: res });
  //     });
  // }, [checkbtn]);
  useEffect(() => {
    Axios("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      setData({ ...data, isloading: true, todos: res.data });
    });
  }, [checkbtn]);

  return (
    <div>
      {checkbtn !== true ? (
        <button onClick={ShowData}>Show Data</button>
      ) : (
        <div>
          {isloading !== true ? (
            <span>Loading...</span>
          ) : (
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>completed</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <th>{todo.id}</th>
                    <td>{todo.title}</td>
                    <td>{String(todo.completed)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default FirstExample;
