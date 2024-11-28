'use client'
import JobGrid1 from '@components/elements/job/JobGrid1'
import JobGrid2 from '@components/elements/job/JobGrid2'
import JobGrid3 from '@components/elements/job/JobGrid3'
import JobGrid4 from '@components/elements/job/JobGrid4'
import JobGrid5 from '@components/elements/job/JobGrid5'
import Layout from '@components/layout/dashboard/Layout'
import data from "@data/jobs.json"
const PostedJobs = () => {

    return (
        <>
            <Layout breadcrumbTitle={"PostedJobs"}>
                <div className="grid grid-cols-3 gap-5">
                    {data.slice(0, 9).map((item, i) => (
                        <JobGrid1 item={item} key={i} />
                    ))}
                </div>

            </Layout>
        </>
    )
}

export default PostedJobs