import api from "@/config/axios";
import { isAxiosError } from "axios";

export async function getCommentsByPost ({postId}) {
    try {
        const {data} = await api.get(`/comment/${postId}`)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}