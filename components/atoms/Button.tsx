import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'accent'
}

export function Button({
                           variant = 'primary',
                           className = '',
                           ...rest
                       }: ButtonProps) {
    const base = 'px-4 py-2 rounded transition'
    const style = {
        primary:   'bg-primary text-background hover:opacity-90',
        secondary: 'bg-secondary text-text hover:opacity-90',
        accent:    'bg-accent text-background hover:opacity-90',
    }[variant]

    return <button className={`${base} ${style} ${className}`} {...rest} />
}
