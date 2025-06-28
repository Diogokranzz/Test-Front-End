import { render, screen } from '@testing-library/react';
import ProductGrid from './components/ProductGrid';

test('renderiza o título da vitrine', async () => {
  render(<ProductGrid />);
  const titulo = await screen.findByText(/Vitrine Tech/i);
  expect(titulo).toBeInTheDocument();
});

test('renderiza pelo menos um card de produto', async () => {
  render(<ProductGrid />);
  const card = await screen.findByRole('article');
  expect(card).toBeInTheDocument();
});
