
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import Service from './pages/Shared/Service'
import MapExample from './pages/Shared/Maps'
import Map from './pages/Shared/Maps'
import About from './pages/Shared/About'
import Contact from './pages/Shared/Contact'
import UserDash from './pages/User/UserDash'
import Search from './pages/Shared/Search'





const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/aboutus' element={<About />} />
                        <Route path='/map' element={<Map />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                        <Route path='/dash' element={<UserDash />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App