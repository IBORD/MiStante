import React from 'react'

interface IconProps {
    name: 'home' | 'info' | 'contact'
    size?: number
}

const paths = {
    home: 'M10 20V14H14V20H19V12H22L12 3 2 12H5V20z',
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48…',
    contact: 'M2 2h20v20H2V2zm2 2v16h16V4H4z…',
}

export function Icon({ name, size = 24 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block"
        >
            <path d={paths[name]} />
        </svg>
    )
}
