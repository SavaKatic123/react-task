import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List</strong>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.products.map((product) => {
              return <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.department}</td>
                <td>{product.price}</td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}
