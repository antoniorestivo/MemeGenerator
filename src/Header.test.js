import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders a title', () => {
  const {getByText} = render(<Header />);
  
  expect(getByText("Gleem Generator")).toBeInTheDocument();
});
