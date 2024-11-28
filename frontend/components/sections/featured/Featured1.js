import JobGrid1 from '@components/elements/job/JobGrid1'
import SectionTitle from '@components/elements/SectionTitle'
import data from "@data/jobs.json"

const FeaturedSection1 = () => {
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

                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                        {data.slice(0, 9).map((item, i) => (
                            <JobGrid1 item={item} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default FeaturedSection1