import React, { Component } from "react";

export default class AddLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: ""
    };
  }

  handleChange = e => {
    this.setState({ line: e.target.value });
  };

  handleSubmit = () => {
    this.props.submitLine(this.state);
    this.setState({
      line: ""
    });
  };

  render() {
    return (
      <div className="addLine">
        <label> I don't remeber all lines. Please Add some more!</label>
        <input
          type="text"
          value={this.state.line}
          name="Add Line"
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
