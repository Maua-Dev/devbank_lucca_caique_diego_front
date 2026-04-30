export async function get(endpoint: string = "") {
    const baseUrl = sessionStorage.getItem("URL_API") || "";
    const response = await fetch(`${baseUrl}${endpoint}`);
    const data = await response.json();
    return data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function post(endpoint: string, body: any) {
    const baseUrl = sessionStorage.getItem("URL_API") || "";
    const response = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
}