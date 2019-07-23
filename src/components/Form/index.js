import React, { Component } from "react";
import "./styles.css";
// import { Container } from './styles';

export default class Form extends Component {
  state = {
    buyer: {
      name: "",
      email: ""
    },
    users: [{ name: "", email: "" }]
  };
  componentDidMount() {
    console.log(this.state.users);
  }

  addUser = e => {
    this.setState({ users: [...this.state.users, { name: "", email: "" }] });
  };

  handleBuyerChange = e => {
    this.setState({ buyer: { ...this.state.buyer, name: e.target.value } });
  };

  handleChange = (e, index) => {
    const users = this.state.users;
    users[index][e.target.name] = e.target.value;

    this.setState({ users: users });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form>
          <label>Seu nome</label>
          <input value={this.state.buyer.name} onChange={this.handleBuyerChange} />

          {this.state.users.map((user, index) => (
            <div className={"block"} key={index}>
              <label>Nome</label>
              <input name={"name"} value={user.name} onChange={e => this.handleChange(e, index)} />

              <label>Email</label>
              <input name={"email"} value={user.email} onChange={e => this.handleChange(e, index)} />
            </div>
          ))}

          <button type={"button"} onClick={this.addUser}>
            Add
          </button>
          <button type={"button"} onClick={this.submitForm}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
