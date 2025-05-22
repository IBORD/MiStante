import React from 'react'

export function Footer() {
    return (
        <footer className="bg-noir-secondary text-noir-text py-6 mt-auto">
            <div className="max-w-5xl mx-auto text-center">
                <p>© 2025 MiStante. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                </div>
            </div>
        </footer>
    )
}
