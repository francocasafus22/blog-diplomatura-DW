import { isAxiosError } from "axios";
import api from "../config/axios"

export async function login(formData){
    try {
        const { data } = await api.post("/user/login", formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getUser(){
    try {
        const { data } = await api.get("/user");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function editProfileImage(file){
    let formData = new FormData();
    formData.append("image", file)
    try{
        const {data} = await api.post("/user/image", formData);
        return data
    } catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function editProfileBanner(file){
    let formData = new FormData();
    formData.append("banner", file)
    try{
        const {data} = await api.post("/user/banner", formData);
        return data
    } catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function registerUser(formData) {
    try{
        const {data} = await api.post("/user/register", formData);
        return data 
    }catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getProfile(username){
    try{
        const {data} = await api.get(`/user/profile/${username}`);
        return data 
    }catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function editProfile(formData){
    try{
        const {data} = await api.put("/user", formData);
        return data 
    }catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}