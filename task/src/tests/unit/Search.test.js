import React from 'react';
import Search from '../../Search';
import "../../setupTests.js";
import { shallow, mount, render } from 'enzyme';
import products from './../../assets/products.json';

describe('Search.js', () => {
  const wrapper = shallow(<Search/>);

  it('products are imported', () => {
    expect(wrapper.state().products.length).toBe(30);
  });

  it('is search query searching exact matches correctly', () => {
    wrapper.setState({
      products: products,
      query: 'Beef',
      from: '',
      to: '',
      displayedProducts: []
    });

    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(3);

    wrapper.setState({
      products: products,
      query: 'Food',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(21);

    wrapper.setState({
      products: products,
      query: 'PR-12',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(1);

  });
  it('is search query a substring of attribute', () => {
    wrapper.setState({
      products: products,
      query: 'Bee',
      from: '',
      to: '',
      displayedProducts: []
    });

    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(3);

    wrapper.setState({
      products: products,
      query: 'Foo',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(21);

    wrapper.setState({
      products: products,
      query: 'PR-3',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(2);
  })

  it('is filter by price correct', () => {
    wrapper.setState({
      products: products,
      query: '',
      from: '10',
      to: '100',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitFilter();
    expect(wrapper.state().displayedProducts.length).toBe(2);
    wrapper.setState({
      products: products,
      query: '',
      from: '100',
      to: '1000',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitFilter();
    expect(wrapper.state().displayedProducts.length).toBe(6);
    wrapper.setState({
      products: products,
      query: '',
      from: '100',
      to: '100',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitFilter();
    expect(wrapper.state().displayedProducts.length).toBe(0);
  });

  it('is search query case insensitive', () => {
    wrapper.setState({
      products: products,
      query: 'bEEF',
      from: '',
      to: '',
      displayedProducts: []
    });

    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(3);

    wrapper.setState({
      products: products,
      query: 'fOOD',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(21);

    wrapper.setState({
      products: products,
      query: 'pr-12',
      from: '',
      to: '',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(1);
  });

  it('is empty query returning whole array', () => {
    wrapper.setState({
      products: products,
      query: '',
      from: '',
      to: '',
      displayedProducts: []
    });

    wrapper.instance().handleSubmitSearch();
    expect(wrapper.state().displayedProducts.length).toBe(30);
  });

  it('is incorrect filter range returning whole products array', () => {
    wrapper.setState({
      products: products,
      query: 'bEEF',
      from: '1000',
      to: '100',
      displayedProducts: []
    });
    wrapper.instance().handleSubmitFilter();
    expect(wrapper.state().displayedProducts.length).toBe(30);
  });


});
