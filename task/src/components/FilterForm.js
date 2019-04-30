import React, { Component } from 'react'

export default class FilterForm extends Component {

  handleSubmitFilter = (e) => {
    e.preventDefault();
    this.props.handleSubmitFilter();
  }

  handlePriceInputChange = (e) => {
    this.props.handlePriceInputChange(e.target);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitFilter}>
          <label htmlFor="name">Filter:</label>
          <input value={this.props.from}
                 onChange={this.handlePriceInputChange}
                 type="number"
                 name="from"
                 placeholder="Price from..."/>
          <input value={this.props.to}
                 onChange={this.handlePriceInputChange}
                 type="number"
                 name="to"
                 placeholder="Price to..."/>

          <input type="submit" value="Filter"/>
        </form>
      </div>
    )
  }
}
