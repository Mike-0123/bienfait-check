import axiosInstance from "./axiosInstance";

export const sendContact = async (data: any) => {
    return await axiosInstance.post('/api/contact', data)
}

export const sendJoin = async (data: any) => {
    return await axiosInstance.post('/api/application', data)
}