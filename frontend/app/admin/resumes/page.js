import Resumes from '@components/dashboard/Resumes'
import Layout from '@components/layout/dashboard/Layout'

const AllResumes = () => {
    return (
        <>
            <Layout breadcrumbTitle={"AllResumes"}>
                <div className="grid grid-cols-2 gap-5">
                    <Resumes />
                </div>
            </Layout>
        </>
    )
}

export default AllResumes