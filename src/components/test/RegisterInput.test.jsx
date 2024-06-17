/**
 *
 * - RegisterInput component
 *   - should handle username typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { render } from './test-utils';
import FormRegister from '../fragments/FormRegister';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    // arrange
    render(<FormRegister register={() => {}} />);
    const usernameInput = screen.getByPlaceholderText('masukan username...');

    // action
    await userEvent.type(usernameInput, 'usernametesting');

    // assert
    expect(usernameInput).toHaveValue('usernametesting');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<FormRegister register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('masukan email...');

    // action
    await userEvent.type(emailInput, 'emailtesting');

    // assert
    expect(emailInput).toHaveValue('emailtesting');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<FormRegister register={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('masukan password...');

    // action
    await userEvent.type(passwordInput, 'passwordtesting');

    // assert
    expect(passwordInput).toHaveValue('passwordtesting');
  });

  it('should call register when register function when register button is clicked', async () => {
    // arrange
    const mockRegister = vi.fn();
    render(<FormRegister register={mockRegister} />);
    const usernameInput = await screen.getByPlaceholderText(
      'masukan username...',
    );
    await userEvent.type(usernameInput, 'usernametesting');
    const emailInput = await screen.getByPlaceholderText('masukan email...');
    await userEvent.type(emailInput, 'emailtesting');
    const passwordInput = screen.getByPlaceholderText('masukan password...');
    await userEvent.type(passwordInput, 'passwordtesting');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // action
    await fireEvent.submit(registerButton);

    // assert
    expect(mockRegister).toBeCalledWith({
      displayName: 'usernametesting',
      email: 'emailtesting',
      password: 'passwordtesting',
    });
  });
});
