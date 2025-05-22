import { type Config } from 'tailwindcss'

const config: Config = {
    theme: {
        extend: {
            colors: {
                primary:   'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent:    'var(--color-accent)',
                background:'var(--color-background)',
                text:      'var(--color-text)',
            }
        }
    }
}

export default config
