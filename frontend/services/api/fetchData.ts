import { CODE_RESPONSE } from "./constant";

export interface ApiResponse<T> {
    code: CODE_RESPONSE,
    message: string,
    data: T,
    jobs?: T,
    job?: T,
    profile?: T
}

interface ParamsRequest {
    url: string, 
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH', 
    headers?: object,
    body?: object
    cache?: "force-cache" | "no-store",
    next?: { revalidate: number }
};

function FetchData<T>(params: ParamsRequest): Promise<ApiResponse<T> | any> {
    return new Promise((resolve, reject) => {
        try {
            fetch(params.url, {
                headers: { 
                    'Content-Type': 'application/json', 
                    ...params.headers
                },
                cache: params.cache,
                method: params.method,
                body: params.method == 'GET' ? undefined : JSON.stringify(params.body)
            })
                .then(response => { return resolve(response); })
                .catch(e => {
                    return reject(e);
                });
        } catch(e) {
            console.log("error: lỗi khi call api: ", e);
            return reject(e);
        }
    });
}

export default FetchData;