import Link from "next/link"

import { useState } from 'react'
const MobileMenu = ({ isToggled, handleToggle }) => {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleDropdown = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className={`${isToggled ? "blog" : "hidden"} navbar-menu relative z-50 transition duration-300`}>
                <div className="navbar-backdrop fixed inset-0 bg-pgray-800 opacity-25" onClick={handleToggle} />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                    <div className="flex items-center mb-8 justify-between">
                        <Link href="/" className="logo font-bold px-3 py-1 rounded-lg max-w-[100px] text-center text-2xl">Prexjob</Link>
                        <button className="navbar-close" onClick={handleToggle}>
                            <svg className="h-6 w-6 text-pgray-400 cursor-pointer hover:text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className={`mb-1 menu-item-has-children rounded-xl ${isActive.key == 1 ? "active" : ""}`}>
                                <span className="menu-expand" onClick={() => handleDropdown(1)}>+</span>
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500" href="#">Home</Link>
                                <ul className="dropdown pl-5" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Home 1</Link>
                                    </li>
                                    <li>
                                        <Link href="/index-2" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Home 2</Link>
                                    </li>
                                    <li>
                                        <Link href="/index-3" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Home 3</Link>
                                    </li>
                                    <li>
                                        <Link href="/index-4" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Home 4</Link>
                                    </li>
                                    <li>
                                        <Link href="/index-5" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Home 5</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500 rounded-xl" href="/jobs">Jobs</Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500 rounded-xl" href="/recruters">Recruters</Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500 rounded-xl" href="/candidates">Candidates</Link>
                            </li>
                            <li className="mb-1 rounded-xl">
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500 rounded-xl" href="/blog">Blog</Link>
                            </li>
                            <li className={`mb-1 menu-item-has-children rounded-xl ${isActive.key == 2 ? "active" : ""}`}>
                                <span className="menu-expand" onClick={() => handleDropdown(2)}>+</span>
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500" href="#">Pages</Link>
                                <ul className="dropdown pl-5" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                    <li>
                                        <Link href="/about" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/faqs" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Faqs</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500">Contact</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-3 text-sm text-pgray-500 hover:bg-primary-50/50  hover:text-primary-500" href="/admin">Dashboard</Link>
                            </li>
                        </ul>
                        <div className="mt-4 pt-6 border-t border-pgray-100">
                            <Link className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-primary-400 hover:bg-primary-500   text-white rounded" href="#">Sign Up</Link>
                            <Link className="block px-4 py-3 mb-2 text-xs text-center text-primary-500 hover:text-primary-700 font-semibold leading-none border border-primary-200 hover:border-primary-300 rounded" href="#">Log In</Link>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-pgray-400">
                            <span>Get in Touch</span>
                            <Link className="text-primary-500 hover:text-primary-500 underline" href="#"> contact@Prexjob.com</Link>
                        </p>
                        <Link className="inline-block px-1" href="#">
                            <img src="/images/icons/facebook-blue.svg" alt="" />
                        </Link>
                        <Link className="inline-block px-1" href="#">
                            <img src="/images/icons/twitter-blue.svg" alt="" />
                        </Link>
                        <Link className="inline-block px-1" href="#">
                            <img src="/images/icons/instagram-blue.svg" alt="" />
                        </Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default MobileMenu