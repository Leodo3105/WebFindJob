import BlogGrid1 from '@components/elements/blog/BlogGrid1'
import Pagination from '@components/elements/Pagination'
import Filter1 from '@components/filter/Filter1'
import Layout from '@components/layout/landing/Layout'
import NewsletterSection1 from '@components/sections/newsletter/Newsletter1'
import data from "@data/blog.json"
export const metadata = {
    title: 'Prexjob | Job Board Nextjs Tailwindcss Listing Directory Template',
}
const Blog = () => {
    return (
        <>
            <Layout
                breadcrumbTitle={"Our Blog"}
                breadcrumbSubTitle={"Work for the best companies in the world"}
                breadcrumbAlign={"center"}
                headerBg={"transparent"}
            >
                <div className="section-padding">
                    <div className="container">
                        <Filter1 content="Blog" />
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">
                            {data.slice(0, 6).map((item, i) => (
                                <BlogGrid1 item={item} key={i} />
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
                <NewsletterSection1 />
            </Layout>
        </>
    )
}

export default Blog