import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './Tugas'; 
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  // 1. Counter Default Value must be 0
  test('Counter default value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    expect(countValue).toHaveTextContent('0');
  });

  // 2. Increment works when button clicked
  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
  });

  // 3. Decrement works when button clicked
  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('-1');
  });

  // 4. Reset the count using reset button
  test('resets count when reset button is clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');
    
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
    
    fireEvent.click(resetButton);
    expect(countValue).toHaveTextContent('0');
  });

  // 5. Greeting component displays correct greeting for "nama mahasiswa"
  test('Greeting component shows correct name', () => {
    render(<Greeting name="Kerfin Aprian" />);
    const greetingElement = screen.getByTestId('greeting');
    expect(greetingElement).toHaveTextContent('Hello, Kerfin Aprian');
  });

  // 6. Greeting component displays correct greeting for "nama dosen"
  test('Greeting component shows correct greeting for lecturer', () => {
    render(<Greeting name="Pak Tawar" />);
    const greetingElement = screen.getByTestId('greeting');
    expect(greetingElement).toHaveTextContent('Hello, Pak Tawar');
  });

  // 7. Triggers alert with correct message when clicked
  test('triggers alert with correct message when clicked', () => {
    const alertMessage = "This is an alert!";
    global.alert = jest.fn(); 
    
    render(<AlertButton message={alertMessage} />);
    
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    
    expect(global.alert).toHaveBeenCalledWith(alertMessage);
  });
});
