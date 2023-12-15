"use client"

import Link from 'next/link'
import React from 'react'
import LoginForm from './LoginForm';
import { useUser } from '@/lib/store/user';

const Navbar = () => {

    const user = useUser((state) => state.user);
    console.log(user);

    return (
        <nav className='flex items-center justify-between'>
            <div className='group'>
                <Link href="/" className='text-2xl font-bold'>
                    AlbBlog
                </Link>
                <div className='h-1 w-0 group-hover:w-full transition-all bg-blue-600'>

                </div>
            </div>
            {user?.id ? (
                <h1>Profile</h1>
            ) : (
                <LoginForm />
            )}
        </nav>
    )
}

export default Navbar