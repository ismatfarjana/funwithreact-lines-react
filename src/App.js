import React, { Component } from "react";
import "./App.css";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready to Read some Lines?"
    };
  }

  generateRandomLine = () => {
    axios
      .get("https://intense-everglades-40088.herokuapp.com/api/lines")
      .then(res => {
        const randomNumber = Math.floor(Math.random() * 4 + 1);
        const quote = res.data[randomNumber];
        console.log(randomNumber);
        this.setState({ message: quote.line });
      });
  };

  render() {
    return (
      <div className="message">
        <h1>Lines of Zeb</h1>

        <h2>{this.state.message}</h2>
        <button onClick={this.generateRandomLine}>CLICK ME</button>
        <footer>
          React Lesson of CODER ACADEMY &copy; SyedaIsmatFarjana 2020
        </footer>
      </div>
    );
  }
}
