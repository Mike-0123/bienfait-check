import React from 'react';

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]).map((key) => key.toUpperCase());

  return (
    <div className="overflow-x-auto rounded-xl dark:bg-bgColor bg-textColorHover">
      <table className="w-full whitespace-nowrap divide-y dark:divide-gray-200 divide-grey">
        <thead className='dark:bg-bgColor2 bg-textColorMiddle'>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-center text-lg leading-4 font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-6 dark:divide-boxdark divide-white">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
              {headers.map((header, headerIndex) => {
                if (header.toLowerCase() === 'img') {
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900 dark:text-gray-100">
                      <img src={row[header.toLowerCase()]} alt="Image" className='w-16 rounded-md' />
                    </td>
                  );
                } 
                else  if (header.toLowerCase() === 'answerindex') {
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900 dark:text-gray-100">
                      {row["options"][row["answerIndex"]]}.
                    </td>
                  );
                } 
                else  if (header.toLowerCase() === 'options') {
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900 dark:text-gray-100">
                      <ul className='text-start list-disc'>
                        {row["options"].map(q=> <li>{`${q}`}</li>)}
                      </ul>
                    </td>
                  );
                } 
                else  if (header.toLowerCase() === 'question') {
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-normal text-sm leading-5 text-gray-900 dark:text-gray-100">
                      {row[header.toLowerCase()]}
                    </td>
                  );
                } 
                else {
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm leading-5 text-gray-900 dark:text-gray-100">
                      {row[header.toLowerCase()]}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
