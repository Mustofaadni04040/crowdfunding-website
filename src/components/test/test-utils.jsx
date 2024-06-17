import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../states';

const renderWithProviders = (ui, options) =>
  render(<Provider store={store}>{ui}</Provider>, options);

export * from '@testing-library/react';
export { renderWithProviders as render };
