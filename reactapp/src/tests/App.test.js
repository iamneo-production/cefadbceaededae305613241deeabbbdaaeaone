import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Counter from '../components/Counter';
import Button from '../components/Button';
import AppBar from '../components/AppBar';



describe('App Component Tests', () => {
  test('Counter_component _renders_correctly_with_given_count', () => {
    const count = 5;
    const wrapper = shallow(<Counter count={count} />);
    expect(wrapper.find('.counter-value').text()).toContain(`Counter: ${count}`);
  });

  test('Button_component_invokes_onClick_function_when_clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<Button label="Test Button" onClick={onClickMock} />);
    wrapper.find('.button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  test('App_component_initializes_with_count_set_to_0', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('count')).toBe(0);
  });

  test('App_component_increments_count_when_Increment_button_is_clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleIncrement();
    expect(wrapper.state('count')).toBe(1);
  });

  test('App_component_decrements_count_when_Decrement_button_is_clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    wrapper.instance().handleDecrement();
    expect(wrapper.state('count')).toBe(4);
  });

  test('App_component_resets_count_to_0_when_Reset_button_is_clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    wrapper.instance().handleReset();
    expect(wrapper.state('count')).toBe(0);
  });


  test('App_component_increment_button_increases_count_when_clicked', () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find(Button).at(0);
    incrementButton.simulate('click');
    expect(wrapper.state('count')).toBe(1);
  });

  test('App_component_decrement_button_decreases_count_when_clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ count: 5 });
    const decrementButton = wrapper.find(Button).at(1);
    decrementButton.simulate('click');
    expect(wrapper.state('count')).toBe(4);
  });

  test('App_component_displays_correct_title_in_AppBar', () => {
    const title = 'Counter App';
    const wrapper = shallow(<App />);
    const appBarTitle = wrapper.find(AppBar).prop('title');
    expect(appBarTitle).toBe(title);
  });
});

 