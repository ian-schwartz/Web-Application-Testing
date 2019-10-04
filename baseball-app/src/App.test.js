import React from 'react';
import { render } from '@testing-library/react';
import App, { addStrike, addBall } from './App';

test('renders without crashing', () => {
  (<App />);
});

test('addBall adds 1 to the currentValue', () => {
  let actual;
  let expected;
  actual = addBall(0);
  expected = 1;
  expect(actual).toBe(expected);
  expect(actual).not.toBe(4);

  expect(addBall(0)).toBe(1);
  expect(addBall(0)).not.toBe(2);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
