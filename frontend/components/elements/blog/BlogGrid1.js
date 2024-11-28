import Image from "next/image"
import Link from "next/link"

const BlogGrid1 = ({ item }) => {
    const { id, title, img, category, author, date } = item
    return (
        <>
            <div className="w-full mb-8 bg-primary-50/50 rounded-xl ">
                <Link href={`/blog/${id}`}>
                    <Image width={300} height={200} className="w-full rounded-tl-xl rounded-tr-xl" src={`/images/blog/${img}`} alt="" />
                    <div className="py-8 px-5">
                        <p className="mb-3 text-sm text-primary-400 wow animate__animated animate__fadeInUp">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-primary-100 text-primary-600 rounded-xl mr-3">{category}</span>
                            <span className="text-pgray-400 text-xs">{date}</span>
                        </p>
                        <h3 className="my-2 text-xl font-semibold wow animate__animated animate__fadeInUp">{title}</h3>
                        <p className="text-pgray-400 leading-loose wow animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogGrid1