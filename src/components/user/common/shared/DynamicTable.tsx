import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function DynamicTable({ data, columns, isLoading }: { data: any, columns: any, isLoading?: boolean }) {

  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const [isTableLoading, setIsTableLoading] = useState(isLoading || false);

  useEffect(() => {
    setIsTableLoading(isLoading || false);
  }, [isLoading]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })

  const buttonStyle = "px-2 py-1 text-black rounded-md";
  const enabledButtonStyle = "bg-slate-300 hover:bg-slate-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
  const disabledButtonStyle = "bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-500 dark:text-gray-600";
  const tableStyle = "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg";
  const trStyle = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
  const tdStyle = "px-6 py-4";
  const thStyle = "px-6 py-3 cursor-pointer";
  const theadStyle = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col gap-2 py-2 px-1'>
      {isTableLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 w-full">
          <FaSpinner className='animate-spin text-4xl' />
        </div>
      )}
      <input type='text' className='py-1 px-5 rounded-md w-80 border-2 border-black dark:outline-none text-grey-900 dark:text-black' value={filtering} onChange={e => setFiltering(e.target.value)} placeholder='Search' />
      <table className={tableStyle}>
        <thead className={theadStyle}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={thStyle}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        { asc: ' 🔼', desc: ' 🔽' }[
                        header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className={trStyle}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className={tdStyle}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {table.getPageCount() > 1 && (
        <div className='w-full flex justify-around'>
          <button
            onClick={() => table.setPageIndex(0)}
            className={`${buttonStyle} ${table.getCanPreviousPage() ? enabledButtonStyle : disabledButtonStyle}`}
            disabled={!table.getCanPreviousPage()}
          >
            First page
          </button>
          <button
            onClick={() => table.previousPage()}
            className={`${buttonStyle} ${table.getCanPreviousPage() ? enabledButtonStyle : disabledButtonStyle}`}
            disabled={!table.getCanPreviousPage()}
          >
            Previous page
          </button>
          <button
            onClick={() => table.nextPage()}
            className={`${buttonStyle} ${table.getCanNextPage() ? enabledButtonStyle : disabledButtonStyle}`}
            disabled={!table.getCanNextPage()}
          >
            Next page
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            className={`${buttonStyle} ${table.getCanNextPage() ? enabledButtonStyle : disabledButtonStyle}`}
            disabled={!table.getCanNextPage()}
          >
            Last page
          </button>
        </div>
      )}

    </div>
  )
}