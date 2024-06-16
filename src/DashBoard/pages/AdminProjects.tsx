import React, { useState, useMemo, useEffect } from 'react';
import { useGetProjects, useDeleteProject, useEditProject } from '../Api/adminAPI';
import { ColumnDef } from '@tanstack/react-table';
import { FaPencilAlt, FaSpinner, FaTrashAlt } from 'react-icons/fa';
import DynamicTable from '../../components/user/common/shared/DynamicTable';
import { toast } from 'react-toastify';
import Loading from '../../components/user/common/shared/Loading';
import ErrorView from '../../components/user/common/shared/ErrorView';
import { Popup } from '../../components/user/common/shared/Popup';
import Input from '../components/common/form/Input';
import SubmitButton from '../components/common/form/SubmitButton';
import TextArea from '../components/common/form/TextArea';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addProjectSchema } from '../components/utils/validations';

const AdminProjects = () => {
  const { data, error, isLoading } = useGetProjects();
  const deleteProjectMutation = useDeleteProject();
  const editProjectMutation = useEditProject();
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<any>({});

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: '#',
        accessorFn: (row, i) => i + 1
      },
      {
        accessorKey: 'title',
        header: 'Title',
      },
      {
        accessorKey: 'location',
        header: 'Location',
      },
      {
        accessorKey: 'description',
        header: 'Description',
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'images',
        header: 'Images',
        cell: ({ getValue }) => (
          <div className="flex flex-wrap gap-2">
            {getValue<string[]>().map((image, index) => (
              <img key={index} src={image} alt={`project-${index}`} className="w-12 h-12 object-cover rounded-md" />
            ))}
          </div>
        ),
      },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex flex-wrap gap-2'>
            <button onClick={() => handleEdit(row.original)} className="mr-2 bg-blue-600 hover:bg-blue-700 flex justify-center items-center text-white rounded-md gap-1 py-1 px-2">
            <FaPencilAlt /> Edit
            </button>
            <button onClick={() => handleDelete(row.original._id)} className="bg-red-600 hover:bg-red-700 flex justify-center items-center text-white rounded-md gap-1 py-1 px-2">
            <FaTrashAlt /> Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    formMethods.reset({
      title: projectToEdit.title || "",
      location: projectToEdit.location || "",
      description: projectToEdit.description || "",
      status: projectToEdit.status || "",
    });
  }, [projectToEdit]);

  const handleEdit = (project: any) => {
    setProjectToEdit(project);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (data: any) => {
    try {
      setLoading(true);
      await editProjectMutation.mutateAsync({ id: projectToEdit._id, data });
      toast.success('Project updated successfully');
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (projectId: any) => {
    try {
      setLoading(true);
      await deleteProjectMutation.mutateAsync(projectId);
      toast.success('Project deleted successfully');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formMethods = useForm({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "",
      location: "",
      description: "",
      status: "",
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <ErrorView error={error} />;

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-10 text-center">PROJECTS</h1>
      <DynamicTable data={data} columns={columns} isLoading={loading} />

      {isEditModalOpen && (
        <Popup setShowPopup={setIsEditModalOpen} className="w-full md:w-10/12 lg:w-8/12">
          <h2 className="text-2xl">Edit Project</h2>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(handleEditSubmit)} className="flex flex-col justify-center items-center">
              <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-center items-center">
              <Input title="Title" type="text" placeholder="Enter project title" name="title" className="w-10/12" />
              <Input title="Location" type="text" placeholder="Enter project location" name="location" className="w-10/12" />
              </div>
              <TextArea title="Description" placeholder="Enter project description" name="description" className="w-10/12" />
              <Input title="Status" type="text" placeholder="Enter project status" name="status" className="w-10/12" />
              <SubmitButton
                title="Update Project"
                loadingTitle="Updating Project..."
                isLoading={loading}
                disabled={loading}
              >
                {loading && <FaSpinner className="animate-spin text-2xl mr-1" />}
              </SubmitButton>
            </form>
          </FormProvider>
        </Popup>
      )}
    </div>
  );
};

export default AdminProjects;