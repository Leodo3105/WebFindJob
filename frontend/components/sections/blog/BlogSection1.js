import BlogGrid1 from "@components/elements/blog/BlogGrid1"
import SectionTitle from "@components/elements/SectionTitle"
import data from "@data/blog.json"
const BlogSection1 = () => {
    return (
        <>

            <div className="section-padding">
                <div className="container">
                    <SectionTitle
                        style={2}
                        title="Exploring the World of Knowledge"
                        subTitle="Unleash Your Curiosity with Engaging Articles, Expert Opinions, and Inspiring Stories"
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-7 mt-20 ">
                        {data.slice(0, 3).map((item, i) => (
                            <BlogGrid1 item={item} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection1