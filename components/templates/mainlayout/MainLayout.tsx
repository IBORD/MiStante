import React from 'react'

interface MainLayoutProps {
    children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* header, main, footer */}
            {children}
        </div>
    )
}
