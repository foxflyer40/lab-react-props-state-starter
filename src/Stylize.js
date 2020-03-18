import React from 'react'

class Stylize extends React.Component {

  render() {
    return (
      <div id='toggle'>
        <form className='radio'>
          <label>
            Bold
          <input type='radio' checked={this.props.style === 'bold' || this.props.style === 'bolditalic' || this.props.style === 'italicbold'} value='bold' onChange={this.props.handleStyles} />
          </label>
          <label>
            Italics
          <input type='radio' checked={this.props.style === 'italic' || this.props.style === 'bolditalic' || this.props.style === 'italicbold'} value='italic' onChange={this.props.handleStyles} />
          </label>
          <label>
            Normal
          <input type='radio' checked={this.props.style === 'normal'} value='normal' onChange={this.props.handleStyles} />
          </label>

        </form>
      </div>
    )
  }
}

export default Stylize
