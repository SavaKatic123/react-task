import React from 'react';
import './styles/Search.css';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import FilterForm from './components/FilterForm';
import products from './../src/assets/products.json';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      query: '',
      from: '',
      to: '',
      displayedProducts: []
    };
  }

  componentWillMount() {
    this.setState({
      products: products
    })
  }

  handleInputQueryChange = (query) => {
    this.setState({
      query: query
    });
  }

  handlePriceInputChange = (target) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmitSearch = () => {
    this.setState({
      displayedProducts: this.searchProducts()
    });
  }

  handleSubmitFilter = () => {
    this.setState({
      displayedProducts: this.filterProducts()
    });
  }

  searchProducts = () => {
    if (!this.state.query) {
      return this.state.products;
    }
    let query = this.state.query.toLowerCase();
    return this.state.products.filter((product) => {
      return product.name.toLowerCase().includes(query) ||
        product.id.toLowerCase().includes(query) ||
        product.department.toLowerCase().includes(query);
    });
  }

  filterProducts = () => {
    if (!this.state.from || !this.state.to || (parseFloat(this.state.to) < parseFloat(this.state.from))) {
      return this.state.products;
    }

    let filteredProducts = this.state.products;
    if (this.state.from) {
      filteredProducts = filteredProducts.filter((product) => {
        return parseFloat(product.price.slice(1)) > parseFloat(this.state.from);
      })
    }

    if(this.state.to) {
      filteredProducts = filteredProducts.filter((product) => {
        return parseFloat(product.price.slice(1)) < parseFloat(this.state.to);
      })
    }

    return filteredProducts;
  }

  render() {
    return (
      <div className="Products">
        <FilterForm handleSubmitFilter={this.handleSubmitFilter}
                    handlePriceInputChange={this.handlePriceInputChange}/>

        <SearchForm query={this.state.query}
                    handleSubmitSearch={this.handleSubmitSearch}
                    handleInputQueryChange={this.handleInputQueryChange}/>

        <ProductList products={this.state.displayedProducts}/>
      </div>
    );
  }
}
