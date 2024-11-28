'use client'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import data from "@data/faq.json"

const Faq1 = () => {
    return (

        <div className="w-full px-4 section-padding">
            <div className="mx-auto w-full max-w-5xl rounded-2xl  p-2">
                {data.map((item, i) => (
                    <Disclosure as="div" className="mb-4 group wow animate__animated animate__fadeInUp" key={i}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`flex w-full justify-between rounded-xl  px-4 py-5 text-left text-xl font-semibold text-pgray-900 group-hover:text-primary-500 ${open?"bg-pgray-50":""}`}>
                                    <span>{item.ques}</span>
                                    <ChevronUpIcon
                                        className={` font-bold ${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-pgray-900`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className={`px-4 pb-6 text-base text-gray-600 leading-loose  ${open?"bg-pgray-50":""}`}>
                                        {item.ans}
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}



export default Faq1