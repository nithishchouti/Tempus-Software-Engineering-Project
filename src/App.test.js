 import { render, screen } from '@testing-library/react';
 import Header from './Homepage/Header.js';

// test('renders learn react link', () => {
//   render(<App />);
  
// });

describe('Header component', () => {
  test('renders the logo and name correctly', () => {
    render(<Header />);
    const logo = screen.getByAltText('LOGO');
    const name = screen.getByText('TEMPUS');
    expect(logo).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  test('renders the navigation menu correctly', () => {
    render(<Header />);
    const featuresLink = screen.getByText('Why Tempus?');
    const contactLink = screen.getByText('Contact');
    const getStartedLink = screen.getByText('Get Started');
    expect(featuresLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(getStartedLink).toBeInTheDocument();
  });
});