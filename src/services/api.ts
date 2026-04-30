export const BASE_URL: string = sessionStorage.getItem("URL_API") + "/";

export async function get(endpoint: string = "") {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
}

export async function post(endpoint: string, body: any) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}