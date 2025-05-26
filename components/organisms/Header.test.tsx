import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { useRouter, NextRouter } from 'next/router';

interface MockLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  [propName: string]: unknown;
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

jest.mock('next/router', () => ({
  useRouter: jest.fn<() => Partial<NextRouter>, []>(),
}));

describe('<Header />', () => {
  const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

  beforeAll(() => {
    mockUseRouter.mockReturnValue({
      pathname: '/',
      route: '/',
      query: {},
      asPath: '/',
      basePath: '',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isLocaleDomain: false,
      isReady: true,
      isPreview: false,
    });
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