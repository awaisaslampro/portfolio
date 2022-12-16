import { React, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Header = () => {

    const [showMenu, setShowMenu] = useState("md:hidden")
    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },
        {
            title: 'Projects',
            key: '/projects'

        },
        {
            title: 'Courses',
            key: '/courses'
        },
        {
            title: 'Contact',
            key: '/contact'
        }
    ]
    const pathName = window.location.pathname;
    return (
        <div className='text-white'>
            <div className={`flex bg-theme justify-between item-center p-2 shadow-lg ${showMenu == '' && 'md:flex-col'}`}>
                <div className='flex justify-between items-center w-full'>
                    <h1 className='text-4xl font-semibold'>K S R</h1>
                    <FaBars className='lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer'
                        onClick={() => {
                            if (showMenu === "md:hidden") {
                                setShowMenu("")
                            }
                            else {
                                setShowMenu("md:hidden")
                            }
                        }} />
                </div>
                <div className="flex md:hidden">
                    {menuItems.map((menu) => {
                        return <li className={`list-none mx-5 p-1 ${menu.key === pathName && 'bg-white text-black rounded-md'}`}>
                            <Link to={`${menu.key}`}>{menu.title}</Link>
                        </li>
                    })}
                </div>
                <div className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
                    {menuItems.map((menu) => {
                        return <li className={`list-none py-1 ${menu.key === pathName && 'bg-white text-black rounded-md px-5'}`}>
                            <Link to={`${menu.key}`}>{menu.title}</Link>
                        </li>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Header;





