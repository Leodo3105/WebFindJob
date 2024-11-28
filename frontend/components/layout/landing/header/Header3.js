'use client'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../Menu'

export default function Header3({ handleToggle, scroll }) {
    return (
        <>
            <div className={`left-0 m-0 right-0  top-0 z-50 ${scroll ? "fixed w-100  transition-all bg-white py-4 shadow" : "absolute bg-transparent py-8"}`}>
                <div className="container">
                    <div className="flex gap-4 items-center justify-between">
                        <Link href="/" className="">
                            <Image
                                width={134}
                                height={29}
                                sizes="50vw"
                                src={`/images/${scroll ? "logo.png" : "logo-white.png"}`}
                                alt=""
                            />
                        </Link>
                        <div className="items-center justify-end header-right hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <Menu transparent scroll={scroll} />
                        </div>
                        <Link className="text-white btn bg-primary-500   px-8 rounded-md cursor-pointer" href="/signin">Signin</Link>
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