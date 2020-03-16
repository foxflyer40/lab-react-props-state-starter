import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      textInput: evt.target.value
    });
  }

  render() {
    return <TextInput input={this.state.textInput} />;
  }
}

function TextInput(props) {
  return (
    <div className="App">
      <h1>
        Type in the textarea below, and have the text appear in the Div at the
        bottom
      </h1>
      <textarea className="source" />
      <div className="target">
        <p>{props.input}</p>
      </div>
    </div>
  );
}
