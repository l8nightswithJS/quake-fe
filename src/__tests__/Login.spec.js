import React from 'react';

import { render, cleanup } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Login from '../components/user_components/Login';

afterEach(cleanup);

describe('testing for state in Login', () => {
  const { getByTestId, findByTestId } = render(
      <Router>
        <Login />
      </Router>
  );

  it('shows sign in text', () => {
    const button = getByTestId('login-button');
    expect(button).toHaveTextContent('Login');
  });

  it.skip('should have required password input', () => {
    const password = findByTestId('loginPassword');
    expect(password).toBeRequired();
  });
});