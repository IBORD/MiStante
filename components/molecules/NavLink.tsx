'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string
    label: string
}

export function NavLink({ href, label }: NavLinkProps) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded ${
                isActive ? 'bg-yellow-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
        >
            {label}
        </Link>
    )
}
