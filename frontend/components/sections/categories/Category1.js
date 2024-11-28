'use client'
import SectionTitle from '@components/elements/SectionTitle'
import CategorySlider1 from '@components/slider/CategorySlider1'

const Category1 = () => {
    return (
        <>
            <div className="section-padding">
                <div className="container">
                    <SectionTitle
                        style={1}
                        title="Search by Category"
                        subTitle="Explore Exciting Opportunities in the Digital World"
                        linkTitle="All Categories"
                        url="jobs"
                    />
                    <div className="category-slider1">
                        <CategorySlider1 />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category1