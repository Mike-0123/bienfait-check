import React, { useMemo } from 'react';
import { useDeleteProject, useGetProjects } from '../Api/adminAPI';
import { getCoreRowModel, useReactTable, ColumnDef, flexRender } from '@tanstack/react-table';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminProjects = () => {
  const { data, error, isLoading } = useGetProjects();

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
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
          <div>
            <button onClick={() => handleEdit(row.original)} className="mr-2 text-blue-600">
              Edit
            </button>
            <button onClick={() => handleDelete(row.original._id)} className="text-red-600">
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (project: any) => {
    // Implement edit functionality
    console.log('Editing project:', project);
  };

  const handleDelete = async (projectId: any) => {
    // const { error } = useDeleteProject(projectId);
    // if (!error) {
    //   toast.success('Project deleted successfully')
    // } else {
    //   toast.error(error.message)
    // }
    console.log(projectId + "Deleted")
  };

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><FaSpinner className="animate-spin text-5xl" /></div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading projects: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className='text-4xl mb-10 text-center'>PROJECTS</h1>
      <table className='w-full border-collapse'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='bg-gray-900 text-white'>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='border p-2'>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='p-2 border'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProjects;
