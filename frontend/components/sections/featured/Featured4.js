import JobGrid4 from '@components/elements/job/JobGrid4'
import SectionTitle from '@components/elements/SectionTitle'
import data from "@data/jobs.json"

const FeaturedSection4 = () => {
    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <SectionTitle
                        style={1}
                        title="Featured Job Offers"
                        subTitle="Explore Exciting Opportunities with Prominent Employers"
                        linkTitle="All Job Offers"
                        url="jobs"
                    />

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-20">
                        {data.slice(0, 6).map((item, i) => (
                            <JobGrid4 item={item} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default FeaturedSection4