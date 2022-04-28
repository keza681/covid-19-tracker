/* eslint-disable camelcase */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/store';
import App from '../App';

describe('Test of detail page component', () => {
  test('It should render the details successfully', () => {
    const tree = renderer
      .create(
        <Provider store={configureStore}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
