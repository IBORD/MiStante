import React from 'react'
import { NavLink } from '@/components/molecules/NavLink'

export function Navbar() {
    return (
        <nav className="flex space-x-2">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/catalog" label="Catalog" />
            <NavLink href="/contact" label="Contact" />
        </nav>
    )
}
