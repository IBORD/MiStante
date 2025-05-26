import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

interface MockLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  [key: string]: unknown;
}

jest.mock('next/link', () => {
  const MockedLink = ({ children, href, className, ...rest }: MockLinkProps) => (
    <a href={href} className={className} {...(rest as React.HTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
  MockedLink.displayName = 'MockedLink';
  return MockedLink;
});


describe('<Navbar />', () => {
    beforeEach(() => {
        render(<Navbar />);
    });

    it('renders a navigation landmark', () => {
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });

    const links: Array<{ label: string; href: string }> = [
        { label: 'Home',    href: '/' },
        { label: 'About',   href: '/about' },
        { label: 'Catalog', href: '/catalog' },
        { label: 'Contact', href: '/contact' },
    ];

    links.forEach(({ label, href }) => {
        it(`includes a "${label}" link to "${href}"`, () => {
            const link = screen.getByRole('link', { name: label });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', href);
        });
    });
});