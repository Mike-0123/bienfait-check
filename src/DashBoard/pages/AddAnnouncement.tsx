import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';
import Input from '../components/common/form/Input';
import SubmitButton from '../components/common/form/SubmitButton';
import { addAnnouncementSchema } from '../components/utils/validations';
import { useAddAnnouncement } from '../Api/adminAPI';
import { convertBase64, commonStyleClasses } from '../components/utils';
import TextArea from '../components/common/form/TextArea';
import { getErrorMessage } from '../../utils/errorHandler';
import { useNavigate } from 'react-router-dom';

const AddAnnouncement = () => {
  const navigate = useNavigate()
  const addAnnouncementMutation = useAddAnnouncement()
  const [announcementImage, setAnnouncementImage] = useState(null);
  const [addingAnnouncement, setAddingAnnouncement] = useState(false);

  const formMethods = useForm({
    resolver: zodResolver(addAnnouncementSchema),
    defaultValues: {
      title: "",
      description: "",
      expireAt: 7
    },
  });

  async function handleAddAnnouncement(data) {
    if (!announcementImage) {
      toast.warn("Please upload an image!");
      return;
    }

    setAddingAnnouncement(true);
    try {
      const imageBase64 = await convertBase64(announcementImage);
      await addAnnouncementMutation.mutateAsync({
        ...data,
        image: imageBase64
      });
      toast.success('Announcement added successfully!');
      setAnnouncementImage(null);
      formMethods.reset();
      navigate('/admin/announcements')
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setAddingAnnouncement(false);
    }
  }

  return (
    <div className={commonStyleClasses("courses", null, true).adminDiv}>
      <h1 className='text-3xl mb-10 text-center'>ADD NEW ANNOUNCEMENT</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleAddAnnouncement)} className='flex flex-col justify-center items-center'>
          <Input
            title="Title"
            type="text"
            placeholder="Enter announcement title"
            name="title"
            className='w-10/12'
          />
          <div className="flex flex-col items-center justify-center w-10/12 my-4 border-2 border-dashed rounded-lg cursor-pointer py-3 px-1">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-60">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {announcementImage ? (
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <span className='font-semibold'>Click anywhere to change image</span>
                    <img src={URL.createObjectURL(announcementImage)} alt="Announcement" className="w-48 mb-3 rounded-md" />
                  </div>
                ) : (
                  <FaCloudUploadAlt className="w-10 h-10 mb-3 text-gray-400" />
                )}
                {!announcementImage && (
                  <span className="font-semibold">Drag and drop an image here or click to upload</span>
                )}
              </div>
              <input
                onChange={(e) => setAnnouncementImage(e.target.files[0])}
                id="dropzone-file"
                type="file"
                accept='image/*'
                className="hidden"
              />
            </label>
          </div>
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
            title="Add Announcement"
            loadingTitle="Adding Announcement..."
            isLoading={addingAnnouncement}
            className="mb-6 w-2/3 sm:w-1/3 cursor-pointer rounded-md border border-primary px-5 py-3 text-base font-medium  transition bg-textColor text-bgColor flex justify-center items-center"
          >
            {addingAnnouncement && <span className='text-bgColor animate-spin text-2xl mr-1'><FaSpinner /></span>}
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddAnnouncement;