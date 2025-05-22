import React from 'react'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export function Button({
                           variant = 'primary',
                           className = '',
                           ...rest
                       }: ButtonProps) {
    const base = 'px-4 py-2 rounded transition'
    const style =
        variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'

    return <button className={`${base} ${style} ${className}`} {...rest} />
}
