import Axios from "axios";
import React, { Component } from "react";

export default class Data extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      users: [],
    };
  }
  // with fetch
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ isLoading: true, users: res });
  //     });
  // }

  // with async/awiat
  // async componentDidMount() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   console.log(data);
  //   this.setState({ isLoading: true, users: data });
  // }

  //with axios
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      this.setState({
        isLoading: true,
        users: res.data,
      });
    });
  }

  render() {
    const { users, isLoading } = this.state;
    return (
      <div>
        {isLoading !== true ? (
          <span>Loading...</span>
        ) : (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
