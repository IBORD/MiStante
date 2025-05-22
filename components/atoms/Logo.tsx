import React from 'react'

interface LogoProps {
    src: string
    alt: string
    size?: number
}

export function Logo({ src, alt, size = 40 }: LogoProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="rounded-full"
        />
    )
}
