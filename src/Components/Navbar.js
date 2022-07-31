import React, { Children } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth'
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../Hooks/useAdmin';

const Navbar = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin]=useAdmin(user)
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/login')

    }
    const menu = <>
        <li><NavLink className='rounded' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded' to='/shop'>Shop</NavLink></li>
        <li><NavLink className='rounded' to='/about'>About Us</NavLink></li>
        {
            admin && <li><NavLink className='rounded' to='/admin'>Admin</NavLink></li>
        }


        <li>{user ? <i onClick={logout} class="fa-solid fa-right-from-bracket rounded-lg"></i> : <NavLink to='/signin' className='rounded-lg'>Login</NavLink>}</li>

    </>
    return (
        <div>
            <div class="drawer ">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content  flex flex-col ">
                    {/* <!-- Navbar --> */}
                    <div class="w-full navbar bg-base-300 lg:px-20  ">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <Link to='/' class="flex-1 px-2 mx-2 text-primary chill cursor-pointer font-bold">SoftIT Care</Link >
                        <div class="flex-none hidden lg:block">
                            <ul class="menu menu-horizontal ">
                                {/* <!-- Navbar menu content here --> */}

                                {menu}

                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        <div className='flex justify-around items-center my-5'>

                            <p className='font-bold text-primary title'>SoftIT Care</p>
                            <label for="my-drawer-3" class="btn btn-sm btn-circle  ">✕</label>
                        </div>
                        {menu}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;