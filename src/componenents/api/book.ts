import axios from "axios"

export const updateBook = async (s: book) => {
    const result = await axios.put(procces.env.api_url+ `/book`, s)
    return result.data
}