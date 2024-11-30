"use client";

import FetchData, { ApiResponse } from "@services/api/fetchData";
// import { Message } from "../reducers/messageReducer";

export interface GetMyProfileResponse {
    id: number,
    user_id: number,
    fullname: string,
    avatar: string,
    phone: string,
    cv: string,
    description: string,
    education: string
}

function getMyProfile({ token }: { token: string }): Promise<ApiResponse<GetMyProfileResponse[]>> {
    return new Promise((resolve, reject) => {
        FetchData({
            url: `${process.env.NEXT_PUBLIC_BASE_API}/applicant/profile`, 
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


export default getMyProfile;