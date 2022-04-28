import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/store';
import Nav from '../components/Navbar';

test('router test', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
