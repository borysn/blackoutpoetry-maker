import React, {Component} from 'react'
import Poem from './poem.jsx'
import Word from './word.jsx'

class EditText extends Component {
  constructor(props) {
    super(props)
    this.handleTextEdit = this.handleTextEdit.bind(this)
  }

  handleTextEdit(indices) {
    this.props.onTextEdit(indices)
  }

  render() {
    return (
      <div id='edittext-container' className='section-container'>
        <div className='section-title'>
          <span className='section-title-num'>2</span>
          <span className='section-title-text'>edit text</span>
        </div>
        <div id='edittext'>
          <Poem indices={this.props.indices}
            tokenizedText={this.props.poem.tokenizedText} onTextEdit={this.handleTextEdit} />
        </div>
      </div>
    )
  }
}

export default EditText
