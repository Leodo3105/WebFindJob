'use client'
import * as Icon from '@heroicons/react/24/outline'
import Link from "next/link"
import { useState } from "react"



function Sidebar({ isToggled, toggleTrueFalse }) {

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: null,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const data = [
        {
            name: "Dashboard",
            path: "",
            icon: <><Icon.HomeIcon /></>
        },
        {
            name: "Posted jobs",
            path: "/posted-jobs",
            icon: <><Icon.BriefcaseIcon /></>
        },
        {
            name: "Recruters",
            path: "recruters",
            icon: <><Icon.UserCircleIcon /></>,
        },
        {
            name: "Candidates",
            path: "candidates",
            icon: <><Icon.UsersIcon /></>,
        },
        {
            name: "Locations",
            path: "locations",
            icon: <><Icon.MapIcon /></>, 
        },
        {
            name: "Resumes",
            path: "/resumes",
            icon: <><Icon.QueueListIcon /></>
        },
        {
            name: "Settings",
            path: "/settings",
            icon: <><Icon.CogIcon /></>
        }
    ]
    return (
        <>
            <aside
                x-transitionenter="transition transform duration-300"
                x-transitionenter-start="-translate-x-full opacity-30  ease-in"
                x-transitionenter-end="translate-x-0 opacity-100 ease-out"
                x-transitionleave="transition transform duration-300"
                x-transitionleave-start="translate-x-0 opacity-100 ease-out"
                x-transitionleave-end="-translate-x-full opacity-0 ease-in"
                // className={`${isToggled ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""} fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none`}
                className={isToggled ?
                    "fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none" :
                    "fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none -translate-x-full lg:translate-x-0 lg:w-20"
                }
            >

                <div className={isToggled ?
                    "flex items-center justify-between flex-shrink-0 p-2" :
                    "flex items-center justify-between flex-shrink-0 p-2 lg:justify-center"}
                >
                    <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
                        J<span className={isToggled ? '' : "lg:hidden"} >obify</span>
                    </span>

                    {/* mobile sidebar close button */}
                    <button className="p-2 rounded-md lg:hidden" onClick={toggleTrueFalse}>
                        <svg
                            className="w-6 h-6 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                    <ul className="p-2 overflow-hidden">
                        {data.map((item, i) => (
                            <li className={`${isActive.key == i ? "active" : ""} ${isToggled ? '' : "justify-center"}`} key={i}>
                                <Link
                                    // className={`
                                    // ${isToggled && "justify-center "}
                                    // flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-100 cursor-pointer`}
                                    className={isToggled ?
                                        "flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-100 cursor-pointer" :
                                        "flex items-center px-2 py-4 space-x-2 rounded-md hover:bg-gray-100 cursor-pointer justify-center"}

                                    href={`/admin/${item.path}`}
                                >

                                    <span className="h-6 w-6 text-gray-500">
                                        {item.icon}
                                    </span>

                                    <span
                                        // className={`${isToggled && "lg:hidden"} text-pgray-600`}
                                        className={isToggled ? 'text-pgray-600' : "text-pgray-600 lg:hidden"}

                                    >
                                        {item.name}

                                    </span>


                                    {item.sub &&
                                        <span className={`
                                            ${isActive.key == i ? "-rotate-180" : ""}
                                            ${isToggled && "lg:hidden"} 
                                            transform transition-transform absolute right-5
                                     `} onClick={() => handleToggle(i)}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </span>
                                    }
                                </Link>

                                {isActive.key == i && item.sub &&
                                    <ul className={isToggled && "lg:hidden"}>
                                        {item.sub?.map(ab => (
                                            <li className="pl-10 py-1">
                                                <Link href={`/admin/recruters/${ab.path}`}>
                                                    {ab.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ul>


                </nav>

            </aside>
        </>
    )
}

export default Sidebar
