
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
const JobGrid1 = ({ item }) => {
    // console.log(item);
    return (
        <>
            <div className="group">
                <div className="relative px-6 pt-5 pb-5 rounded-xl bg-primary-50/50 group-hover:bg-primary-500 transition duration-150 wow animate__animated animate__fadeInUp">
                    <div className="flex items-center">
                        <Image
                            // fill
                            width={50}
                            height={50}
                            src={`/images/company/${item.logo}`}
                            alt=""
                            className="rounded-xl"
                        />
                        <div className='ml-4'>
                            <h5 className='font-medium text-pgray-600 group-hover:text-pgray-200 transition duration-150'>{item.company}</h5>

                            <span className="flex items-center text-pgray-500 group-hover:text-pgray-300 transition duration-150">
                                <Icon.GeoAlt className='mr-1' />
                                {item.location}
                            </span>
                        </div>
                    </div>
                        <Link href="/jobs/1"> <h4 className='mt-4 text-xl font-medium group-hover:text-white'>{item.jobTitle} </h4></Link>
                    <div className="my-3">
                        <span className='bg-primary-50  shadow-sm text-xs px-3 py-1 rounded-xl mr-2 text-primary-500 capitalize'>{item.tag}</span>
                        {/* <span className='bg-primary-50/50  shadow-sm text-[12px] px-3 py-1 rounded-xl mr-2 text-primary-500 capitalize'>Fulltime</span> */}
                        {/* <span className='bg-primary-50/50  shadow-sm text-[12px] px-3 py-1 rounded-xl mr-2 text-primary-500 capitalize'>Internship</span> */}
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center group-hover:text-pgray-50">
                            <Icon.Clock />
                            <span className='ml-2 text-sm text-gray-500 group-hover:text-pgray-300'>{item.time} days ago</span>
                        </div>
                        <div className="group-hover:text-white">${item.salary}k <small className='text-pgray-500 group-hover:text-pgray-300'>/ Yearly</small></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default JobGrid1