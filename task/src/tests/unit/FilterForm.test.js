import React from 'react';
import FilterForm from './../../../src/components/FilterForm'
import "../../setupTests.js";
import { shallow, mount, render } from 'enzyme';

describe('FilterForm.js component', () => {
  it('is change start price handler binded to input', () => {
    const handlePriceInputChange = jest.fn(),
      props = {
          from: '',
          handlePriceInputChange
      },
    InputComponent = mount(<FilterForm {...props} />).find('input[name="from"]');
    InputComponent.simulate('change', { target: '123'});
    expect(handlePriceInputChange).toHaveBeenCalledWith('123');
  });

  it('is correct start price value shown in input', () => {
    const wrapper = shallow(<FilterForm from='123'/>);
    const input = wrapper.find('input[name="from"]');
    expect(input.props().value).toBe('123');
  });

  it('is change end price handler binded to input', () => {
    const handlePriceInputChange = jest.fn(),
      props = {
          from: '',
          handlePriceInputChange
      },
    InputComponent = mount(<FilterForm {...props} />).find('input[name="to"]');
    InputComponent.simulate('change', { target: '123'});
    expect(handlePriceInputChange).toHaveBeenCalledWith('123');
  });

  it('is correct end price value shown in input', () => {
    const wrapper = shallow(<FilterForm to='123'/>);
    const input = wrapper.find('input[name="to"]');
    expect(input.props().value).toBe('123');
  });

  it('is submit handler binded to submit', () => {
    const handleSubmitFilter = jest.fn(),
      props = {
        from: '',
        to: '',
        handleSubmitFilter
      },
    InputQueryComponent = mount(<FilterForm {...props} />).find('input[type="submit"]');
    InputQueryComponent.simulate('submit');
    expect(handleSubmitFilter).toHaveBeenCalled();
  });

})
