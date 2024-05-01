import { render } from '@testing-library/react';
import React from 'react';
import Home from '../app/page';

// Mock VerVuelos component
jest.mock('../app/BusquedaA/VerVuelos', () => <div data-testid="ver-vuelos-mock" />);

describe('Home Component', () => {
    it('renders VerVuelos component', () => {
        const { getByTestId } = render(<Home />);
        const verVuelosMock = getByTestId('ver-vuelos-mock');
        expect(verVuelosMock).toBeInTheDocument();
    });
});