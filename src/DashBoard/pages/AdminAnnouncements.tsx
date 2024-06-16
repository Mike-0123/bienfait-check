import { useState, useMemo, useEffect } from 'react';
import { useGetAnnouncements, useDeleteAnnouncement, useEditAnnouncement } from '../Api/adminAPI';
import { ColumnDef } from '@tanstack/react-table';
import { FaPencilAlt, FaSpinner, FaTrashAlt } from 'react-icons/fa';
import DynamicTable from '../../components/user/common/shared/DynamicTable';
import { toast } from 'react-toastify';
import { getErrorMessage } from '../../utils/errorHandler';
import Loading from '../../components/user/common/shared/Loading';
import ErrorView from '../../components/user/common/shared/ErrorView';
import { Popup } from '../../components/user/common/shared/Popup';
import Input from '../components/common/form/Input';
import SubmitButton from '../components/common/form/SubmitButton';
import TextArea from '../components/common/form/TextArea';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addAnnouncementSchema } from '../components/utils/validations';
import { h1Styles } from '../../components/styles';

const AdminAnnouncements = () => {
  const { data, error, isLoading } = useGetAnnouncements();
  const deleteAnnouncementMutation = useDeleteAnnouncement();
  const editAnnouncementMutation = useEditAnnouncement();
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [announcementToEditData, setAnnouncementToEditData] = useState<any>({});

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
        accessorKey: 'description',
        header: 'Description',
      },
      {
        accessorKey: 'expireAt',
        header: 'Expire Date',
        cell: ({ getValue }) => {
          const expireDate = new Date(getValue<string>());
          const currentDate = new Date();
          const remainingDays = Math.ceil((expireDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

          return (
            <div>
              <div>{expireDate.toDateString()}</div>
              <div>{remainingDays} days remaining</div>
            </div>
          );
        },
      },
      {
        accessorKey: 'image',
        header: 'Image',
        cell: ({ getValue }) => {
          const image = getValue<string[]>();
          if (!image) {
            return null;
          }
          return (
            <div className="flex justify-center items-center">
              <img src={image} alt={`announcement`} className="w-12 h-12 object-cover rounded-md" />

            </div>
          );
        },
      },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <div className='flex flex-wrap gap-2'>
            <button onClick={() => handleEdit(row.original)} className="mr-2 bg-blue-600 hover:bg-blue-700 flex justify-center items-center text-white rounded-md gap-1 py-1 px-2 ">
              <FaPencilAlt /> Edit
            </button>
            <button onClick={() => handleDelete(row.original._id)} className="bg-red-600 hover:bg-red-700 flex justify-center items-center text-white rounded-md gap-1 py-1 px-2 ">
              <FaTrashAlt /> Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (announcement: any) => {
    setAnnouncementToEditData(announcement);
    setIsEditModalOpen(true);
  };
  const getRemainingDays = (expireDateStr) => {
    const expireDate = new Date(expireDateStr);
    const currentDate = new Date();
    const remainingDays = Math.ceil((expireDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));

    return remainingDays;
  };


  useEffect(() => {
    formMethods.reset({
      title: announcementToEditData.title || "",
      description: announcementToEditData.description || "",
      expireAt: getRemainingDays(announcementToEditData.expireAt) || ""
    });
  }, [announcementToEditData]);


  const handleEditSubmit = async (data: any) => {
    try {
      setLoading(true);
      await editAnnouncementMutation.mutateAsync({id: announcementToEditData._id, data});
      toast.success('Announcement updated successfully');
      setIsEditModalOpen(false);
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (announcementId: any) => {
    try {
      setLoading(true);
      await deleteAnnouncementMutation.mutateAsync(announcementId);
      toast.success('Announcement deleted successfully')
    }
    catch (error) {
      toast.error(getErrorMessage(error))
    }
    finally {
      setLoading(false)
    }
  };

  const formMethods = useForm({
    resolver: zodResolver(addAnnouncementSchema),
    defaultValues: {
      title: "",
      description: "",
      expireAt: ""
    },
  });

  if (isLoading) return <Loading />
  if (error) return <ErrorView error={error} />
  return (
    <div className="p-4">
      <h1 className='text-4xl mb-10 text-center'>ANNOUNCEMENTS</h1>
      <DynamicTable data={data} columns={columns} isLoading={loading} />

      {isEditModalOpen &&
        <Popup setShowPopup={setIsEditModalOpen} className="w-full md:w-10/12 lg:w-8/12">
          <h2 className={h1Styles}>Edit Announcement</h2>
          <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(handleEditSubmit)} className='flex flex-col justify-center items-center'>
              <Input
                title="Title"
                type="text"
                placeholder="Enter announcement title"
                name="title"
                className='w-10/12'
              />
              <TextArea
                title="Description"
                placeholder="Enter announcement description"
                name="description"
                className='w-10/12'
              />
              <Input
                title="Expiration (in days)"
                type="number"
                placeholder="Enter expiration period in days"
                name="expireAt"
                className='w-10/12'
              />
              <SubmitButton
                title="Update Announcement"
                loadingTitle="Updating Announcement..."
                isLoading={loading}
                disabled={loading}
              >
                {loading && <span className='text-bgColor animate-spin text-2xl mr-1'><FaSpinner /></span>}
              </SubmitButton>
            </form>
          </FormProvider>
        </Popup>}
    </div>
  );
};

export default AdminAnnouncements;