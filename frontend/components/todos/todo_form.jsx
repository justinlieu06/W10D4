import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleBody = this.handleBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {

  }

  handleBody(e) {

  }

  handleSubmit(e) {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input 
            type="text"
            onChange={this.handleTitle}
            value={this.state.title}
          />
        </label>
        <label>
          Body
          <input 
            type="text"
            onChange={this.handleBody}
            value={this.state.body}
          />
        </label>
        <input type="submit" value="Add Todo" />
      </form>
    )
  }
}

export default TodoForm;