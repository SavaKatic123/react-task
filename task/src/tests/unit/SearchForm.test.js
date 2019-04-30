import React from 'react';
import SearchForm from '../../components/SearchForm';
import "../../setupTests.js";
import { shallow, mount, render } from 'enzyme';

describe('SearchForm.js', () => {
  it('is change input handler binded to input', () => {
    const handleInputQueryChange = jest.fn(),
      props = {
          query: '',
          handleInputQueryChange
      },
    InputQueryComponent = mount(<SearchForm {...props} />).find('input[name="query"]');
    InputQueryComponent.simulate('change', { target: {value: 'new value' }});
    expect(handleInputQueryChange).toHaveBeenCalledWith('new value');
  });

  it('is submit handler binded to submit', () => {
    const handleSubmitSearch = jest.fn(),
      props = {
        query: '',
        handleSubmitSearch
      },
    InputQueryComponent = mount(<SearchForm {...props} />).find('input[type="submit"]');
    InputQueryComponent.simulate('submit');
    expect(handleSubmitSearch).toHaveBeenCalled();
  });

  it('is correct query value shown in input', () => {
    const wrapper = shallow(<SearchForm query='some value'/>);
    const input = wrapper.find('input[name="query"]');
    expect(input.props().value).toBe('some value');
  })

});
