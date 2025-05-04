// src/pages/__tests__/Dashboard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../../features/crypto/CryptoSlice';
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (ui: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      crypto: cryptoReducer,
    },
    preloadedState: {
      crypto: {
        rates: {
          bitcoin: {
            USD: 30000,
            EUR: 27000,
            GBP: 23000,
            JPY: 4100000,
          },
        },
        status: 'succeeded',
        error: null,
        loading: false,
      },
    },
  });

  return render(
    <Provider store={mockStore}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
  );
};

describe('Dashboard Page', () => {
  test('renders crypto cards with correct values', () => {
    renderWithProviders(<Dashboard />);

    expect(screen.getByText(/USD/i)).toBeInTheDocument();
    expect(screen.getByText(/30000/i)).toBeInTheDocument();

    expect(screen.getByText(/EUR/i)).toBeInTheDocument();
    expect(screen.getByText(/27000/i)).toBeInTheDocument();

    expect(screen.getByText(/GBP/i)).toBeInTheDocument();
    expect(screen.getByText(/23000/i)).toBeInTheDocument();

    expect(screen.getByText(/JPY/i)).toBeInTheDocument();
    expect(screen.getByText(/4100000/i)).toBeInTheDocument();
  });
});
