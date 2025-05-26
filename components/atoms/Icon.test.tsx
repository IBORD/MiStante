import React from 'react'
import { render} from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon (atom)', () => {
    it('renders an <svg> with a <path> for each name, and different names yield different paths', () => {
        const { container: c1 } = render(<Icon name="home" data-testid="icon-home" />)
        const path1 = c1.querySelector('path')?.getAttribute('d')
        expect(path1).toBeTruthy()

        const { container: c2 } = render(<Icon name="info" data-testid="icon-info" />)
        const path2 = c2.querySelector('path')?.getAttribute('d')
        expect(path2).toBeTruthy()
        expect(path2).not.toEqual(path1)
    })

})
