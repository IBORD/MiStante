import React from 'react'
import { Header } from '@/components/organisms/Header'
import { Footer } from '@/components/organisms/Footer'

export function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 px-6 py-12 bg-gradient-to-b from-yellow-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to MiStante</h2>
                    <p className="text-gray-700 mb-8">
                        Your place to catalog films, games and share with friends.
                    </p>
                    <a
                        href="/catalog"
                        className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700"
                    >
                        Browse Catalog →
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}
