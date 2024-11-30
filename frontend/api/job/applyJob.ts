"use client";

import FetchData, { ApiResponse } from "@services/api/fetchData";
// import { Message } from "../reducers/messageReducer";

export interface ApplyJobResponse {
    
}

function applyJob({ jobId }: { jobId: number }): Promise<ApiResponse<ApplyJobResponse>> {
    return new Promise((resolve, reject) => {
        FetchData({
            url: `${process.env.NEXT_PUBLIC_BASE_API}/applicant/apply/${jobId}`, 
            method: 'POST',
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


export default applyJob;