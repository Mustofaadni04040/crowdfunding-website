/**
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import FormLogin from '../fragments/FormLogin';
import { render } from './test-utils';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<FormLogin login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('masukan email...');

    // action
    await userEvent.type(emailInput, 'emailtesting');

    // assert
    expect(emailInput).toHaveValue('emailtesting');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<FormLogin login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('masukan password...');

    // action
    await userEvent.type(passwordInput, 'passwordtesting');

    // assert
    expect(passwordInput).toHaveValue('passwordtesting');
  });

  it('should call login when login function button is clicked', async () => {
    // arrange
    const mockLogin = vi.fn();
    render(<FormLogin login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('masukan email...');
    await userEvent.type(emailInput, 'emailtesting');
    const passwordInput = screen.getByPlaceholderText('masukan password...');
    await userEvent.type(passwordInput, 'passwordtesting');
    const loginButton = await screen.getByRole('button', { name: 'Masuk' });

    // action
    await fireEvent.submit(loginButton);

    // assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtesting',
      password: 'passwordtesting',
    });
  });
});
