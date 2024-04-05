import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SigninForm } from '../signinForm';
const props = {signin: true}

describe('SigninForm component', () => {
test('renders initial state correctly', () => {
  
  render(<SigninForm {...props} />);

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const passwordVisibilityIcon = screen.getByRole('button', { name: /toggle password visibility/i });
  const submitButton = screen.getByRole('button', { name: /Sign In/i });

  expect(emailInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
  expect(passwordInput).toHaveAttribute('type', 'password'); // Password is initially hidden
  expect(passwordVisibilityIcon).toBeInTheDocument();
  
});
test('handles email input and validation', () => {
  render(<SigninForm  {...props} />);
  const emailInput = screen.getByLabelText('Email');

  userEvent.type(emailInput, 'invalid_email');
  userEvent.tab(); // Trigger blur to simulate validation

  expect(screen.getByText('enter valid mail address')).toBeInTheDocument();

  userEvent.clear(emailInput);
  userEvent.type(emailInput, 'valid@email.com');
  userEvent.tab(); // Trigger blur

  expect(screen.queryByText('enter valid mail address')).not.toBeInTheDocument();
});

// ... test for password input and validation (similar to email test)

test('toggles password visibility', () => {
  render(<SigninForm  {...props} />);
  const passwordInput = screen.getByLabelText('Password');
  const passwordVisibilityIcon = screen.getByRole('button', { name: /toggle password visibility/i });

  expect(passwordInput).toHaveAttribute('type', 'password');
  userEvent.click(passwordVisibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'text');
  userEvent.click(passwordVisibilityIcon);
  expect(passwordInput).toHaveAttribute('type', 'password');
});

})
