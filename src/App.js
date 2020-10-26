import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddLine from "./components/AddLine";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "CLICK TO GET LINES"
    };
  }

  getLines = () => {
    axios
      .get(`https://intense-everglades-40088.herokuapp.com/api/lines`)
      .then(res => {
        this.setState({ lines: res.data });
      });
  };

  componentDidMount() {
    this.getLines();
  }

  generateRandomLine = () => {
    axios
      .get("https://intense-everglades-40088.herokuapp.com/api/lines")
      .then(res => {
        const randomNumber = Math.floor(Math.random() * 8 + 1);
        const quote = res.data[randomNumber];
        console.log(randomNumber);
        this.setState({ message: quote.line });
      });
  };

  handleSubmitLine = newLine => {
    axios
      .post("https://intense-everglades-40088.herokuapp.com/api/lines", {
        line: newLine.line
      })
      .then(res => {
        const updatedLines = this.state.lines.concat(res.data);
        this.setState({ blogs: updatedLines });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="message">
        <h1>Lines of Zeb</h1>

        <h2>{this.state.message}</h2>
        <button onClick={this.generateRandomLine}>CLICK ME</button>

        <div className="addline">
          <AddLine submitLine={this.handleSubmitLine} />
        </div>

        <footer>React Lesson Practice &copy; SyedaIsmatFarjana 2020</footer>
      </div>
    );
  }
}
