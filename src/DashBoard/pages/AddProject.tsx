import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';
import Input from '../components/common/form/Input';
import SubmitButton from '../components/common/form/SubmitButton';
import { addProjectSchema } from '../components/utils/validations';
import { addProjectApi } from '../Api/adminAPI';
import { convertBase64, commonStyleClasses } from '../components/utils';
import TextArea from '../components/common/form/TextArea';
import { getErrorMessage } from '../../utils/errorHandler';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
  const navigate = useNavigate()
  const [projectImages, setProjectImages] = useState([]);
  const [addingProject, setAddingProject] = useState(false);
  const [resetImageInfo, setResetImageInfo] = useState(false);

  const formMethods = useForm({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "",
      location: "",
      description: "",
      status: ""
    },
  });

  function handleImagesUpload(base64: any) {
    setProjectImages([...projectImages, base64]);
  }

  async function handleAddProject(data: any) {
    if (projectImages.length === 0) {
      toast.warn("Please upload at least one image!");
      return;
    }

    setAddingProject(true);
    try {
      await addProjectApi({
        ...data,
        images: projectImages
      });
      toast.success('Project added successfully!');
      setProjectImages([]);
      setResetImageInfo(prev => !prev);
      formMethods.reset();
      navigate('/admin/projects')
    } catch (error) {
      toast.error(getErrorMessage(error));
    } finally {
      setAddingProject(false);
    }
  }

  return (
    <div className={commonStyleClasses("courses", null, true).adminDiv}>
      <h1 className='text-3xl mb-10 text-center'>ADD NEW PROJECT</h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleAddProject)} className='flex flex-col justify-center items-center'>
          <Input
            title="Title"
            type="text"
            placeholder="Enter project title"
            name="title"
            className='w-10/12'
          />
          <Input
            title="Location"
            type="text"
            placeholder="Enter project location"
            name="location"
            className='w-10/12'
          />
          <UploadInput handleImagesUpload={handleImagesUpload} resetImageInfo={resetImageInfo} />
          <div className="fle">
            <span className='cursor-pointer text-sm text-green-600 mb-5'>{projectImages.length} images || </span>
            <span onClick={() => { setResetImageInfo(prev => !prev); setProjectImages([]); }} className='cursor-pointer text-sm text-blue-600 mb-5'>Clear Images</span>
          </div>
          <TextArea
            title="Description"
            placeholder="Enter project description"
            name="description"
            className='w-10/12'
          />
          <Input
            title="Status"
            type="text"
            placeholder="Enter project status"
            name="status"
            className='w-10/12'
          />
          <SubmitButton
            title="Add Project"
            loadingTitle="Adding Project..."
            isLoading={addingProject}
            className="mb-6 w-2/3 sm:w-1/3 cursor-pointer rounded-md border border-primary px-5 py-3 text-base font-medium  transition bg-textColor text-bgColor flex justify-center items-center"
          >
            {addingProject && <span className='text-bgColor animate-spin text-2xl mr-1'><FaSpinner /></span>}
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProject;

function UploadInput({ handleImagesUpload, resetImageInfo }) {
  const [converting, setConverting] = useState(false);
  const [imageInfo, setImageInfo] = useState([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  useEffect(() => {
    setImageInfo([]);
    setIsDraggingOver(false);
    setConverting(false);
  }, [resetImageInfo]);

  const uploadImage = async (file) => {
    const fileSizeInMB = file.size / (1024 * 1024);
    const fileSizeFormatted = fileSizeInMB < 1 ? (file.size / 1024).toFixed(2) + ' KB' : fileSizeInMB.toFixed(2) + ' MB';
    const nameParts = file.name.split('.');
    const extension = nameParts[nameParts.length - 1];

    setImageInfo(prev => [...prev, file]);

    setConverting(true);
    const base64 = await convertBase64(file);
    setConverting(false);
    handleImagesUpload(base64);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    Array.from(files).forEach(file => {
      if (!file.type.startsWith('image/')) {
        toast.error('Only image files are allowed');
        return;
      }
      uploadImage(file);
    });
    setIsDraggingOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-10/12 my-4 border-2 border-dashed rounded-lg cursor-pointer py-3 px-1 ${isDraggingOver ? 'border-green-500' : 'border-gray-300'} ${isDraggingOver ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800'}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-60"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <FaCloudUploadAlt className={`w-10 h-10 mb-3 text-gray-400 ${converting ? ' animate-bounce' : ''}`} />
          <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {converting ? (
              <span className="font-semibold text-green-500 animate-pulse">Getting images ready for upload...</span>
            ) : imageInfo.length ? (
              <div className='flex flex-row gap-1 justify-center items-center flex-wrap w-full h-48 overflow-hidden'>
                {imageInfo.map((info, index) => (
                  <img src={URL.createObjectURL(info)} alt="project-image" className='w-16 rounded-md' />
                ))}
              </div>
            ) : (
              <span className="font-semibold">Drag and drop images here or click to upload</span>
            )}
          </div>

          {!imageInfo.length && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Accepts: SVG, PNG, JPG or GIF
            </p>
          )}
        </div>
        <input
          onChange={(e) => {
            const files = e.target.files;
            Array.from(files).forEach(file => {
              uploadImage(file);
            });
          }}
          id="dropzone-file"
          type="file"
          accept='image/*'
          className="hidden"
        />
      </label>
    </div>
  );
}
