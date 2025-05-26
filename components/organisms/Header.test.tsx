import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { useRouter } from 'next/router';

// Corrigindo o mock do next/link
interface MockLinkProps {
  children: React.ReactNode;
  href: string;
  [key: string]: any;
}

jest.mock('next/link', () => {
  const MockedLink = ({ children, href, ...rest }: MockLinkProps) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockedLink.displayName = 'MockedLink';
  return MockedLink;
});

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('<Header />', () => {
    beforeAll(() => {
        (useRouter as jest.Mock).mockReturnValue({ pathname: '/' });
    });

    it('renders the logo with correct alt text', () => {
        render(<Header />);
        const logo = screen.getByAltText('MiStante') as HTMLImageElement;
        expect(logo).toBeInTheDocument();
        expect(logo.src).toContain('/logo.png'); 
        expect(logo.width).toBe(48);
        expect(logo.height).toBe(48);
    });

    it('renders the site title as a heading', () => {
        render(<Header />);
        const heading = screen.getByRole('heading', { name: 'MiStante' });
        expect(heading).toBeInTheDocument();
    });

    it('renders the Navbar component', () => {
        render(<Header />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });
});