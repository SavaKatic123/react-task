import React from 'react';
import ProductList from '../../components/ProductList';
import "../../setupTests.js";
import {MOCK_PRODUCT_LIST} from "../../constants/test-mock";

import { shallow, mount, render } from 'enzyme';

describe('ProductList.js component', () => {
  it('is product shown in list', () => {
    const wrapper = shallow(<ProductList products={MOCK_PRODUCT_LIST} />);
    MOCK_PRODUCT_LIST.forEach(product => {
      expect(wrapper.html()).toContain('<td>' + product.id + '</td>');
      expect(wrapper.html()).toContain('<td>' + product.name + '</td>');
      expect(wrapper.html()).toContain('<td>' + product.department + '</td>');
      expect(wrapper.html()).toContain('<td>' + product.price + '</td>');
    });
  });

});
