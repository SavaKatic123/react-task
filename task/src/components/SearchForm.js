import React, { Component } from 'react'

export default class SearchForm extends Component {

  handleQueryChange = (e) => {
    this.props.handleInputQueryChange(e.target.value);
  }

  handleSubmitSearch = (e) => {
    e.preventDefault();
    this.props.handleSubmitSearch();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitSearch}>
          <label htmlFor="name">Search:</label>
          <input value={this.props.query}
                 onChange={this.handleQueryChange}
                 type="text"
                 name="query"
                 placeholder="Type query here..."/>

          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}
