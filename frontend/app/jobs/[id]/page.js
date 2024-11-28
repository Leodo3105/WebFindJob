'use client'
import jobs from "@/data/jobs"
import Layout from '@components/layout/landing/Layout'
import NewsletterSection1 from "@components/sections/newsletter/Newsletter1"
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import * as Icon from 'react-bootstrap-icons'

export default function JobDetails() {
    const abc = useParams()
    const [company, setCompany] = useState({})
    const id = abc.id
    useEffect(() => {
        if (!id) <h1>Loading...</h1>
        else setCompany(jobs.find((item) => item.id == id))
        return () => { }
    }, [id])
    console.log(company)
    return (
        <>
            <Layout headerStyle={2}>
                <div className="container">
                    <div className="job-detail-banner h-72 mt-10 rounded-3xl relative">
                        <Image height={100} width={100} src="/images/company/1.png" alt="" className='rounded-2xl absolute -bottom-10 left-10 border-4 border-gray-100' />
                    </div>
                    <div className="flex justify-between items-center mt-16 mb-16 wow animate__animated animate__fadeInUp">
                        <div>
                            <span className="text-pgray-400 text-base">{company.company}</span>
                            <h2>{company.jobTitle}</h2>
                            <div>
                                <span className=" flex items-center text-gray-500">
                                    <Icon.GeoAlt className='mr-1' />
                                    {company.location}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center'>
                                <Link href="#" className='border h-10 w-10 rounded-full flex items-center justify-center mr-3'><Icon.Heart /></Link>
                                <Link href="#" className='border h-10 w-10 rounded-full flex items-center justify-center mr-3'><Icon.Share /></Link>
                                <button className='px-6 py-2 bg-primary-500   text-white rounded-lg'>Apply Now</button>
                            </div>
                            <p className='text-right mt-3 text-gray-500 text-sm'>10 days ago</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-6 gap-16 mb-24 ">
                        <div className="lg:col-span-3 xl:col-span-4">
                            <div className="overview wow animate__animated animate__fadeInUp">
                                <h4 className='mb-3'>Overview</h4>
                                <p className=' text-gray-500 leading-loose'>As a Human Resources Coordinator, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                            </div>
                            <div className="responsibilities my-10 wow animate__animated animate__fadeInUp">
                                <h4 className='mb-3'>Responsabilities</h4>
                                <ul>
                                    <li>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li>
                                    <li>Work with BAs, product managers and tech teams to lead the Product Design</li>
                                    <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
                                    <li>Accurately estimate design tickets during planning sessions.</li>
                                    <li>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</li>
                                    <li>Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.</li>
                                    <li>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel</li>
                                    <li>Present your work to the wider business at Show & Tell sessions.</li>
                                </ul>
                            </div>
                            <div className="skills my-5 wow animate__animated animate__fadeInUp">
                                <h4 className='mb-3'>Responsabilities</h4>
                                <ul>
                                    <li>Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.</li>
                                    <li>Work with BAs, product managers and tech teams to lead the Product Design</li>
                                    <li>Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.</li>
                                    <li>Accurately estimate design tickets during planning sessions.</li>
                                    <li>Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.</li>
                                    <li>Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.</li>
                                    <li>Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel</li>
                                    <li>Present your work to the wider business at Show & Tell sessions.</li>
                                </ul>
                            </div>
                            <button className='px-8 py-3 bg-primary-500  hover:bg-primary-800 transition duration-150 text-white rounded-lg'>Apply Now</button>
                        </div>
                        <div className="lg:col-span-2 xl:col-span-2">
                            <div className="bg-primary-50/50 rounded-xl px-7 py-10 mb-8 wow animate__animated animate__fadeInUp">
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Experience</span>
                                    <h5 className='text-md font-medium'>Min 4 years</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Work Level</span>
                                    <h5 className='text-md font-medium'>Mid-Level</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Employment Type</span>
                                    <h5 className='text-md font-medium'>Full Time</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Salary</span>
                                    <h5 className='text-md font-medium'>50k - 60k / year</h5>
                                </div>
                            </div>

                            <div className="bg-primary-50/50 rounded-xl px-7 py-10 wow animate__animated animate__fadeInUp">
                                <div className="flex items-center mb-4">
                                    <Image
                                        // fill
                                        width={50}
                                        height={50}
                                        src="/images/company/1.png"
                                        alt=""
                                        className=" rounded-xl"
                                    />
                                    <div className='ml-3'>
                                        <h5 className='font-medium text-gray-700'>Airbnb</h5>

                                        <Link className="text-sm flex items-center text-primary-500" href="#">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Industry</span>
                                    <h5 className='text-md font-medium'>Finance</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Company size</span>
                                    <h5 className='text-md font-medium'>219 employees</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Founded in</span>
                                    <h5 className='text-md font-medium'>2018</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Phone</span>
                                    <h5 className='text-md font-medium'>(123) 456 7890</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Email</span>
                                    <h5 className='text-md font-medium'>gramware@pixelprime.co</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Location</span>
                                    <h5 className='text-md font-medium'>Los Angeles</h5>
                                </div>
                                <div className='mb-5'>
                                    <span className='text-sm text-gray-500'>Website</span>
                                    <Link className='text-md font-medium block' href="#">https://pixelprime.co</Link>
                                </div>

                                <div className='flex pt-4'>
                                    <Link href="#" className='inline-block mr-3 text-xl text-gray-500'><Icon.Facebook /></Link>
                                    <Link href="#" className='inline-block mr-3 text-xl text-gray-500'><Icon.Linkedin /></Link>
                                    <Link href="#" className='inline-block mr-3 text-xl text-gray-500'><Icon.Twitter /></Link>
                                    <Link href="#" className='inline-block mr-3 text-xl text-gray-500'><Icon.Instagram /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewsletterSection1 />
            </Layout>
        </>
    )
}