import React from 'react';
import { shallow } from 'enzyme';
import SubscribeForm from '../../../src/components/SubscribeForm/SubscribeForm';
import Form from '../../../src/components/SubscribeForm/Form';

describe('SubscribeForm', () => {
  test('Displays thank you message on form save', () => {
    const subscribeForm = shallow(<SubscribeForm />);
    const innerForm = subscribeForm.find(Form);
    innerForm.invoke('onSaveSubscribeData')({});
    expect(subscribeForm.text()).toContain('Thank you for subscribing!');
  });
});
