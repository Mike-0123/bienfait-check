import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from "../../components/user/api/axiosInstance";

export const login = async (data: any) => {
    const response = await axiosInstance.post('/api/admin/login', data);
    return response.data.data;
};

export const getDashboardData = async () => {
    const response = await axiosInstance.get('/api/admin/dashboard');
    return response.data.data;
};

export const addProjectApi = async (data: any) => {
    const response = await axiosInstance.post('/api/project', data);
    return response.data.data;
};

export const addAnnouncementApi = async (data: any) => {
    const response = await axiosInstance.post('/api/announcement', data);
    return response.data.data;
};

export const deleteProjectApi = async (id: any) => {
    const response = await axiosInstance.delete(`/api/project/${id}`);
    return response.data.data;
};

export const deleteAnnouncementApi = async (id: any) => {
    const response = await axiosInstance.delete(`/api/announcement/${id}`);
    return response.data.data;
};

export const editProjectApi = async (id: any, data: any) => {
    const response = await axiosInstance.put(`/api/project/${id}`, data);
    return response.data.data;
};

export const editAnnouncementApi = async (id: any, data: any) => {
    const response = await axiosInstance.put(`/api/announcement/${id}`, data);
    return response.data.data;
};

export const getProjectApi = async () => {
    const response = await axiosInstance.get('/api/project');
    return response.data.data;
};

export const getAnnouncementApi = async () => {
    const response = await axiosInstance.get('/api/announcement');
    return response.data.data;
};

// Hooks for using these API calls with react-query

export const useLogin = (data: any) => {
    return useQuery({
        queryKey: ['login', data],
        queryFn: () => login(data),
    });
};

export const useGetDashboardData = (): UseQueryResult => {
    return useQuery({
        queryKey: ['getDashboardData'],
        queryFn: getDashboardData,
    });
};

export const useAddProject = (data: any) => {
    return useQuery({
        queryKey: ['addProject', data],
        queryFn: () => addProjectApi(data),
    });
};

export const useAddAnnouncement = (data: any) => {
    return useQuery({
        queryKey: ['addAnnouncement', data],
        queryFn: () => addAnnouncementApi(data),
    });
};

export const useDeleteProject = (id: any) => {
    return useQuery({
        queryKey: ['deleteProject', id],
        queryFn: () => deleteProjectApi(id),
    });
};

export const useDeleteAnnouncement = (id: any) => {
    return useQuery({
        queryKey: ['deleteAnnouncement', id],
        queryFn: () => deleteAnnouncementApi(id),
    });
};

export const useEditProject = (id: any, data: any) => {
    return useQuery({
        queryKey: ['editProject', id, data],
        queryFn: () => editProjectApi(id, data),
    });
};

export const useEditAnnouncement = (id: any, data: any) => {
    return useQuery({
        queryKey: ['editAnnouncement', id, data],
        queryFn: () => editAnnouncementApi(id, data),
    });
};

export const useGetProjects = (): UseQueryResult => {
    return useQuery({
        queryKey: ['getProjects'],
        queryFn: getProjectApi,
    });
};

export const useGetAnnouncements = (): UseQueryResult => {
    return useQuery({
        queryKey: ['getAnnouncements'],
        queryFn: getAnnouncementApi,
    });
};