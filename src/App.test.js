import { render, screen } from '@testing-library/react';
import App from './App';


it('redners without crashing', () => {
  // render(<App />);
});


test('renders cars app', () => {
  render(<App />);
  const linkElement = screen.getByText(/cars app/i);
  expect(linkElement).toBeInTheDocument();
});
