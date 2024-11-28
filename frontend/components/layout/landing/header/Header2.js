'use client'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../Menu'

export default function Header2({ handleToggle, scroll }) {
    return (
        <>
            {/* <Top2 /> */}
            <div className={`py-5 shadow-sm bg-white  z-50 ${scroll ? "fixed w-full left-0 right-0 top-0 transition-all bg-white" : ""}`}>
                <div className="container">
                    <div className="flex gap-4 items-center justify-between ">
                        <Link href="/" className="logo py-1">
                            <Image
                                width={134}
                                height={29}
                                sizes="50vw"
                                src="/images/logo.png"
                                alt=""
                            />
                        </Link>

                        <div className="items-center justify-end header-right hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <Menu />
                            <Link className="text-white btn bg-primary-500 hover:bg-primary-800 transition duration-150 rounded-md px-5 cursor-pointer" href="/signin">Signin</Link>
                        </div>

                        <div className="lg:hidden" onClick={handleToggle}>
                            <button className="navbar-burger flex items-center py-2 px-3 text-primary-500 hover:text-primary-700 rounded border border-primary-200 hover:border-primary-300">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}