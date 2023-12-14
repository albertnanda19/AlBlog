import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { SiGithub } from "react-icons/si";
import LoginForm from './LoginForm';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <div className='group'>
                <Link href="/" className='text-2xl font-bold'>
                    AlbBlog
                </Link>
                <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-600'>

                </div>
            </div>
            <LoginForm />
        </nav>
    )
}

export default Navbar