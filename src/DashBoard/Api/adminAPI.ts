import { useMutation, useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import axiosInstance from "../../components/user/api/axiosInstance";

// API

export const login = async (data: any) => {
    const response = await axiosInstance.post('/api/admin/login', data);
    return response.data.data;
};

const getDashboardData = async () => {
    const response = await axiosInstance.get('/api/admin/dashboard');
    return response.data.data;
};

const addProjectApi = async (data: any) => {
    const response = await axiosInstance.post('/api/project', data);
    return response.data;
};

const addAnnouncementApi = async (data: any) => {
    const response = await axiosInstance.post('/api/announcement', data);
    return response.data;
};

const deleteProjectApi = async (id: any) => {
    const response = await axiosInstance.delete(`/api/project/${id}`);
    return response.data;
};

const deleteAnnouncementApi = async (id: any) => {
    const response = await axiosInstance.delete(`/api/announcement/${id}`);
    return response.data;
};

const editProjectApi = async (id: any, data: any) => {
    const response = await axiosInstance.put(`/api/project/${id}`, data);
    return response.data;
};

const editAnnouncementApi = async (id: any, data: any) => {
    const response = await axiosInstance.put(`/api/announcement/${id}`, data);
    return response.data;
};

const getProjectApi = async () => {
    const response = await axiosInstance.get('/api/project');
    return response.data.data;
};

const getAnnouncementApi = async () => {
    const response = await axiosInstance.get('/api/announcement');
    return response.data.data;
};





// Hooks

export const useGetDashboardData = (): UseQueryResult => {
    return useQuery({
        queryKey: ['dashboard'],
        queryFn: getDashboardData,
    });
};

export const useGetProjects = (): UseQueryResult => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: getProjectApi,
    });
};

export const useGetAnnouncements = (): UseQueryResult => {
    return useQuery({
        queryKey: ['announcements'],
        queryFn: getAnnouncementApi,
    });
};

export const useAddProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addProjectApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects']})
        }
    })
};

export const useAddAnnouncement = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addAnnouncementApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['announcements']})
        }
    })
};

export const useDeleteProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProjectApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects']})
        }
    })
};

export const useDeleteAnnouncement = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteAnnouncementApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['announcements']})
        }
    })
};

export const useEditProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (input: {id: string, data: any})=>editProjectApi(input.id, input.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects']})
        }
    })
};

export const useEditAnnouncement = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (input: {id: string, data: any})=>editAnnouncementApi(input.id, input.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['announcements']})
        }
    })
};