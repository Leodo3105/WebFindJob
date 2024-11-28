import Layout from '@components/layout/dashboard/Layout'
import CandidateGrid1 from '@components/sections/candidates/CandidateGrid1'
import data from "@data/candidate.json"
const page = () => {
    return (
        <>
            <Layout
                breadcrumbTitle={"Candidates"}
            >
                <div className="grid grid-cols-4 gap-7">
                    {data.map((item, i) => (
                        <CandidateGrid1 item={item} key={i} />
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default page