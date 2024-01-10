import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a test', () => {
    // Arrange
    render(<Greeting />)

    // Act
    //... nothing in this particular case

    //Assert
    // const helloWorldElement = screen.getByText('Hello World')
    const helloWorldElement = screen.getByText('Hello World', { exact: false })
    expect(helloWorldElement).toBeInTheDocument();
  })

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greeting />)

    const paragraphElement = screen.getByText('good to see you', { exact: false })
    expect(paragraphElement).toBeInTheDocument();
  })

  test('renders "Changed!" if the button WAS clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const paragraphElement = screen.getByText('Changed!')
    expect(paragraphElement).toBeInTheDocument();
  })

  test('does not render "good to see you" if the button WAS clicked', () => {
    // Arrange
    render(<Greeting />)

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const paragraphElement = screen.queryByText('good to see you', { exact: false })
    // expect(paragraphElement).not.toBeInTheDocument();
    expect(paragraphElement).toBeNull();
  })
})
