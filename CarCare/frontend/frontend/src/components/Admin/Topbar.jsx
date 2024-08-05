import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'
import { FaUser } from 'react-icons/fa'

const Topbar = () => {
    return (
        <div className='h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary'>
            <div className='w-[95%] h-full flex items-center justify-end gap-4'>
            <FaUser />
            </div>
        </div>
    )
}

export default Topbar