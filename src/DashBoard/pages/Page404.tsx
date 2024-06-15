import React from 'react'
import { commonStyleClasses } from '../components/utils'
import { Link } from 'react-router-dom'
import { dashboardInfo } from '../data'
import { FaExclamation, FaQuestion, FaSpinner } from 'react-icons/fa'

export const Page404 = () => {
    return (<div className="h-100 w-full bg-bgColor2 flex justify-center items-center flex-col">
        <div className='flex justify-center items-center flex-col animate-pulse'>
            <div className="mb-4 text-textColor text-5xl"><FaExclamation /></div>
            <h1 className='text-textColor text-center font-bold text-3xl'>Page Not Found <span className='mt-2 block text-sm'>You followed incorrect path.</span></h1>
            
        </div>
        <Link to={dashboardInfo.startRouteLink}><button className='bg-textColor text-bgColor text-md px-3 py-1 shadow-lg shadow-black mt-10 rounded-lg text-'>Back to Home</button></Link>
    </div>
    )
}
