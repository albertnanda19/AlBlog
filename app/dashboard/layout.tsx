import React, { ReactNode } from 'react'
import NavLinks from './components/NavLinks'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='space-y-5'>
            <NavLinks />
            {children}
        </div>
    )
}

export default layout