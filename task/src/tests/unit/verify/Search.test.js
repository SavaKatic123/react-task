import React from 'react';
import Search from '../../../Search';
import "../../../setupTests.js";
import { shallow, mount, render } from 'enzyme';
import products from './../../../assets/products.json';
import { 
  MOCK_EXACT_SEARCH_QUERIES,
  MOCK_SUBSTRING_SEARCH_QUERIES,
  MOCK_CASE_INSENSITIVE_SEARCH_QUERIES,
  MOCK_FILTER_INVALID_VALUES,
  MOCK_SEARCH_INVALID_VALUES
} from "../../../constants/test-mock";


describe('verify_pack.search.js', () => {
  const wrapper = shallow(<Search/>);

  it('products is an array', () => {
    expect(Array.isArray(wrapper.state().products)).toBeTruthy();
  });

  it('products length is 30', () => {
    expect(wrapper.state().products.length).toBe(30);
  });

  it('is correct json imported', () => {
    expect(wrapper.state().products).toBe(products);
  });

  it('query is of type string', () => {
    expect(typeof wrapper.state().query).toBe('string');
  });

  it('query is an empty string', () => {
    expect(wrapper.state().query).toBe('');
  });

  it('from is of type string', () => {
    expect(typeof wrapper.state().from).toBe('string');
  });

  it('from is an empty string', () => {
    expect(wrapper.state().from).toBe('');
  });

  it('to is of type string', () => {
    expect(typeof wrapper.state().to).toBe('string');
  });

  it('to is an empty string', () => {
    expect(wrapper.state().to).toBe('');
  });

  it('displayedProducts is an array', () => {
    expect(Array.isArray(wrapper.state().displayedProducts)).toBeTruthy();
  });

  it('displayedProducts is empty', () => {
    expect(wrapper.state().displayedProducts.length).toBe(0);
  });

  it('is search query searching exact matches correctly', () => {
    MOCK_EXACT_SEARCH_QUERIES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: mock.query,
        from: '',
        to: '',
        displayedProducts: []
      });
      wrapper.instance().handleSubmitSearch();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });

  it('is search query a substring of attribute', () => {
    MOCK_SUBSTRING_SEARCH_QUERIES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: mock.query,
        from: '',
        to: '',
        displayedProducts: []
      });
      wrapper.instance().handleSubmitSearch();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });

  it('is search query case insensitive', () => {
    MOCK_CASE_INSENSITIVE_SEARCH_QUERIES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: mock.query,
        from: '',
        to: '',
        displayedProducts: []
      });

      wrapper.instance().handleSubmitSearch();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });

  it('is filter by price correct', () => {
    MOCK_FILTER_INVALID_VALUES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: '',
        from: mock.from,
        to: mock.to,
        displayedProducts: []
      });
      wrapper.instance().handleSubmitFilter();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });

  it('is search ignoring invalid values', () => {
    MOCK_SEARCH_INVALID_VALUES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: mock.query,
        from: '',
        to: '',
        displayedProducts: []
      });

      wrapper.instance().handleSubmitSearch();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });

  it('is filter ignoring invalid values', () => {
    MOCK_FILTER_INVALID_VALUES.forEach((mock) => {
      wrapper.setState({
        products: products,
        query: '',
        from: mock.from,
        to: mock.to,
        displayedProducts: []
      });

      wrapper.instance().handleSubmitFilter();
      expect(wrapper.state().displayedProducts.length).toBe(mock.length);
    });
  });



});
