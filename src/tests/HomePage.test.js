/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from '../redux/store';
import Countries from '../components/HomePage';

describe('Homepage test', () => {
  it('Should display item from api', () => {
    const app = renderer
      .create(
        <Provider store={configureStore}>
          <Countries />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Should render detail page by rendering', () => {
    const path = renderer
      .create(
        <Provider store={configureStore}>
          <Countries />
        </Provider>,
      )
      .toJSON();
    expect(path).toMatchSnapshot();
  });
});
