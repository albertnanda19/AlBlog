import { useUser } from '@/lib/store/user'
import Image from 'next/image'
import React from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'
import { Button } from '../ui/button'
import { DashboardIcon, LockOpen1Icon } from '@radix-ui/react-icons'

const Profile = () => {

    const user = useUser((state) => state.user)

    return (
        <Popover>
            <PopoverTrigger>
                <Image
                    src={user?.user_metadata.avatar_url}
                    alt={user?.user_metadata.user_name}
                    width={50}
                    height={50}
                    className='rounded-full ring-2 ring-blue-600'
                />
            </PopoverTrigger>
            <PopoverContent className='p-2 space-y-3 divide-y'>
                <div className='px-4 text-sm'>
                    <p>{user?.user_metadata?.user_name}</p>
                    <p className='text-gray-500'>
                        {user?.user_metadata?.email}
                    </p>
                </div>
                <Link href="/dashboard" className='block'>
                    <Button variant="ghost" className='w-full flex items-center justify-between'>
                        Dashboard
                        <DashboardIcon />
                    </Button>
                </Link>
                <Button variant="ghost" className='w-full flex items-center justify-between'>
                    Logout
                    <LockOpen1Icon />
                </Button>
            </PopoverContent>
        </Popover>
    )
}

export default Profile