"use client";

import FetchData, { ApiResponse } from "@services/api/fetchData";
// import { Message } from "../reducers/messageReducer";

export interface ApplyJobResponse {
    
}

function checkApplyJob({ jobId, token }: { jobId: number, token: string }): Promise<ApiResponse<ApplyJobResponse>> {
    return new Promise((resolve, reject) => {
        FetchData({
            url: `${process.env.NEXT_PUBLIC_BASE_API}/jobs/${jobId}/check-applied`, 
            method: 'GET',
            cache: 'no-store',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(async response => {
            return response.json();
        }).then(response => {
            return resolve(response); 
        }).catch(e => { 
            return reject(e); 
        });
    });
}


export default checkApplyJob;