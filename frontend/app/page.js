
import Layout from "@components/layout/landing/Layout"
import Banner1 from "@components/sections/Banner1"
import BlogSection1 from "@components/sections/blog/BlogSection1"
import BrandSection1 from "@components/sections/brand/Brand1"
import Category1 from "@components/sections/categories/Category1"
import CitySection1 from "@components/sections/city/City1"
import CounterSection1 from "@components/sections/counter/Counter1"
import FeaturedJob1 from "@components/sections/featured/Featured1"
import Hero1 from "@components/sections/hero/Hero1"
import Newsletter1 from "@components/sections/newsletter/Newsletter1"
import TestimonialSection1 from "@components/sections/testimonial/Testimonial1"
import WhyChooseSection1 from "@components/sections/why/WhyChooseUs1"

export const metadata = {
    title: 'Prexjob | Job Board Nextjs Tailwindcss Listing Directory Template',
}
export default function Home() {
    return (
        <>
            <Layout headerStyle={1}>
                <Hero1 />
                <Category1 />
                <FeaturedJob1 />
                <WhyChooseSection1 />
                <Banner1 />
                <CitySection1 />
                <TestimonialSection1 />
                <BrandSection1 />
                <CounterSection1 />
                <BlogSection1 />
                <Newsletter1 />
            </Layout>

        </>
    )
}
