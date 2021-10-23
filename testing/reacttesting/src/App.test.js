import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('renders Count', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

it("should have add and reduce button, and default value of Count is 0", () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  const [add, reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')
  expect(counter).toHaveTextContent('0')
  expect(add).toHaveTextContent('ADD')
  expect(reduce).toHaveTextContent('REDUCE')
})


it("on click of add count should increment by 1", () => {
  const { getByTestId, getAllByTestId } = render(<App />)
  const [add, reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(add)
  expect(counter).toHaveTextContent('1')

})
it("on click reduce should decrement by 1", () => {
  const { getByTestId, getAllByTestId } = render(<App />)
  const [add, reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(reduce)
  expect(counter).toHaveTextContent('-1')
})

it("on add and remove buttons should work", () => {
  const { getByTestId, getAllByTestId } = render(<App />)
  const [add, reduce] = getAllByTestId('button')
  const counter = getByTestId('counter')

  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(add)
  fireEvent.click(reduce)
  expect(counter).toHaveTextContent('3')

  fireEvent.click(reduce)
  fireEvent.click(reduce)
  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('0')

  fireEvent.click(reduce)

  expect(counter).toHaveTextContent('-1')

})