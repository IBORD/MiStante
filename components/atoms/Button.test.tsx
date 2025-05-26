import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button (atom)', () => {
    it('renders with default "primary" styles and forwards children', () => {
        render(<Button>Click me</Button>)
        const btn = screen.getByRole('button', { name: 'Click me' })
        expect(btn).toHaveClass('px-4', 'py-2', 'rounded', 'transition')
        expect(btn).toHaveClass('bg-primary', 'text-background')
    })

    it.each([
        ['secondary', 'bg-secondary', 'text-text'],
        ['accent',    'bg-accent',    'text-background'],
    ] as const)('applies variant="%s" style classes', (variant, bgClass, textClass) => {
        render(<Button variant={variant}>{variant}</Button>)
        const btn = screen.getByRole('button', { name: variant })
        expect(btn).toHaveClass(bgClass, textClass)
    })

    it('allows overriding with className prop', () => {
        render(<Button className="my-extra">Extra</Button>)
        const btn = screen.getByRole('button', { name: 'Extra' })
        expect(btn).toHaveClass('my-extra')
    })

    it('forwards native button attributes (e.g. onClick)', async () => {
        const onClick = jest.fn()
        render(<Button onClick={onClick}>Go</Button>)
        const btn = screen.getByRole('button', { name: 'Go' })
        await userEvent.click(btn)
        expect(onClick).toHaveBeenCalled()
    })
})
