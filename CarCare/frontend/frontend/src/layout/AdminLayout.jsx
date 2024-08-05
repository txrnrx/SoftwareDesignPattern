import Leftbar from '@/components/Admin/Leftbar'
import Topbar from '@/components/Admin/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-hidden'>
      <Leftbar />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
       
        <div className='h-[92vh] w-full overflow-y-auto overflow-x-hidden'>
        <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout