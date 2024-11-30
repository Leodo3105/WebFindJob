"use client";

import FetchData, { ApiResponse } from "@services/api/fetchData";
// import { Message } from "../reducers/messageReducer";

export interface GetAllJobResponse {
    id: number,
    employer_id: number,
    industry_id: number,
    title: string,
    description: string,
    responsibilities: string,
    requirements: string,
    qualifications: string,
    salary_range: string,
    benefits: string[],
    job_type_id: number,
    experience_level: string,
    district_id: number,
    city_id: number,
    country_id: number,
    created_at: string,
    updated_at: string,
    JobType: {
        name: string
    },
    employer: {
        logo: null,
        company_name: "TechCorp"
    },
    City: {
        name: "Ho Chi Minh"
    },
    applied: boolean
}

function getAllJob(): Promise<ApiResponse<GetAllJobResponse[]>> {
    return new Promise((resolve, reject) => {
        FetchData({
            url: `${process.env.NEXT_PUBLIC_BASE_API}/jobs/list`, 
            method: 'GET',
            cache: 'no-store',
            headers: {}
        }).then(async response => {
            return response.json();
        }).then(response => {
            return resolve(response); 
        }).catch(e => { 
            return reject(e); 
        });
    });
}


export default getAllJob;