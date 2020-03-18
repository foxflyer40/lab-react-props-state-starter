import React from "react";
import "./styles.css";
import Stylize from './Stylize.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      style: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      textInput: evt.target.value
    });
  }

  handleStyles = (evt) => {
    let prevStyle = this.state.style

    if (prevStyle === 'bold' || prevStyle === 'italic') {
      prevStyle = prevStyle + evt.target.value
    }
    else {
      prevStyle = evt.target.value
    }

    this.setState({
      style: prevStyle
    })
  }

  render() {
    return (
      <div>
        <TextInput handleCheese={this.handleChange} input={this.state.textInput} style={this.state.style}/>

        <Stylize handleStyles={this.handleStyles} style={this.state.style}/>
      </div>
    )
  }
}

function TextInput(props) {

  let styleObj = {}

  if(props.style === 'bold') {
    styleObj = {fontWeight: props.style}
  }
  else if(props.style === 'bolditalic' || props.style === 'italicbold') {
    styleObj = {
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  }
  else {
    styleObj = {fontStyle: props.style}
  }

  return (
    <div className="App">
      <h1>
        Type in the textarea below, and have the text appear in the Div at the
        bottom
      </h1>
      <textarea onChange={props.handleCheese} className="source" />
      <div className="target">
        <p style={styleObj}>{props.input}</p>
      </div>
    </div>
  );
}
