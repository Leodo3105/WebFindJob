import SectionTitle from '@components/elements/SectionTitle'
import Layout from '@components/layout/landing/Layout'
import Faq1 from '@components/sections/Faq1'
import NewsletterSection3 from '@components/sections/newsletter/Newsletter3'
import WhyChooseSection3 from '@components/sections/why/WhyChooseUs3'
export const metadata = {
    title: 'Prexjob | Job Board Nextjs Tailwindcss Listing Directory Template',
}
const page = () => {
    return (
        <>
            <Layout
                breadcrumbTitle={"Faqs"}
                breadcrumbSubTitle={"Work for the best companies in the world"}
                breadcrumbAlign={"center"}
                headerBg={"transparent"}
            >
                <div className="pt-24">
                    <SectionTitle
                        style={2}
                        title="Frequently Ask Your Questions"
                        subTitle="Unleash Your Curiosity with Engaging Articles, Expert Opinions, and Inspiring Stories"
                    />
                </div>

                <Faq1 />
                <WhyChooseSection3 />
                <NewsletterSection3 />
            </Layout>
        </>
    )
}

export default page