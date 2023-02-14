import sendRequest from "./users-api"
const BASE_URL = "/api/notes"

export async function create(note) {
    try {
        const res = await sendRequest(BASE_URL, "POST", note)
        return res
    } catch (e) {
        throw new Error(e)
    } 
}

export async function index(id) {
    try {
        const res = await sendRequest(`${BASE_URL}/${id}`)
        return res
    } catch (e) {
        throw new Error(e)
    }
}