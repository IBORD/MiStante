// app/layout.tsx
'use client'

import { Provider } from 'react-redux'
import { store }    from '@/store'
import './globals.css'
import MainLayout from '@/components/templates/mainlayout/MainLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}>
            <MainLayout>
                {children}
            </MainLayout>
        </Provider>
        </body>
        </html>
    )
}
