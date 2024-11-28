'use client'
import RecruterModal from '@components/modal/RecruterModal'
import RecruterGrid1 from '@components/sections/RecruterGrid1'
import Layout from '@components/layout/dashboard/Layout'
import data from "@data/recruter.json"
import { useState } from 'react'
const RecruterProfile = () => {

    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <Layout breadcrumbTitle={"Recruter"}>

                <div className="flex">
                    <button onClick={handleToggle}>Create Recruter</button>
                </div>

                <div className="grid grid-cols-3 gap-7">
                    {data.map((item, i) => (
                        <RecruterGrid1 item={item} key={i} />
                    ))}
                </div>
                <RecruterModal isToggled={isToggled} handleToggle={handleToggle} />

            </Layout>
        </>
    )
}

export default RecruterProfile