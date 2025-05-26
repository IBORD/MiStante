import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo (atom)', () => {
    const src = '/logo.png'
    const alt = 'My Brand'

    it('renders an <img> with correct src, alt, width, height and a rounded-full class', () => {
        render(<Logo src={src} alt={alt} size={50} data-testid="logo" />)

        const img = screen.getByTestId('logo') as HTMLImageElement
        expect(img).toHaveAttribute('src', src)
        expect(img).toHaveAttribute('alt', alt)
        expect(img).toHaveAttribute('width', '50')
        expect(img).toHaveAttribute('height', '50')
        expect(img).toHaveClass('rounded-full')
    })

})
