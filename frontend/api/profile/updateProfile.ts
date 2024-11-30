"use client";

import FetchData, { ApiResponse } from "@services/api/fetchData";
// import { Message } from "../reducers/messageReducer";

export interface UpdateProfileResponse {
    id: number,
    user_id: number,
    fullname: string,
    avatar: string,
    phone: string,
    cv: string,
    description: string,
    education: string
}

function updateProfile({ token, data }: { token: string, data: { email: string, fullname: string, avatar: string, phone: string, cv: string, description: string, education: string } }): Promise<ApiResponse<UpdateProfileResponse[]>> {
    return new Promise((resolve, reject) => {
        FetchData({
            url: `${process.env.NEXT_PUBLIC_BASE_API}/applicant/profile/update`, 
            method: 'PUT',
            cache: 'no-store',
            body: data,
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


export default updateProfile;