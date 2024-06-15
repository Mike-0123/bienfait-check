import React, { useMemo } from 'react';
import { useDeleteAnnouncement, useGetAnnouncements } from '../Api/adminAPI';
import { getCoreRowModel, useReactTable, ColumnDef, flexRender } from '@tanstack/react-table';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AdminAnnouncements = () => {
  const { data, error, isLoading } = useGetAnnouncements();

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
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
            return null; // Or some default value or message
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

  const handleEdit = (announcement: any) => {
    // Implement edit functionality
    console.log('Editing announcement:', announcement);
  };

  const handleDelete = async (announcementId: any) => {
    // const { error } = useDeleteAnnouncement(announcementId);
    // if (!error) {
    //   toast.success('Announcement deleted successfully')
    // } else {
    //   toast.error(error.message)
    // }
    console.log(announcementId + "Deleted")
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
    return <div className="text-center text-red-600">Error loading announcements: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <h1 className='text-4xl mb-10 text-center'>ANNOUNCEMENTS</h1>
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

export default AdminAnnouncements;
