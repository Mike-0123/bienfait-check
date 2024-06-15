import { useEffect, useState } from 'react';
import { useGetAnnouncements } from '../../../../DashBoard/Api/adminAPI';
import { toast } from 'react-toastify';
import { h1Styles } from '../../../styles';

const TopAnnouncements = () => {
    const { data: announcements, isLoading, error } = useGetAnnouncements();
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        if (!isLoading && !error && announcements.length > 0 && !triggered) {
            const index = Math.floor(Math.random() * announcements.length);
            const announcement = announcements[index];
            toast.info(
                <div className='flex justify-start mx-1 gap-5 items-center bg-white rounded-md p-4 shadow-sm'>
                    <img src={announcement.image} alt={announcement.title} className='h-12 rounded-md' />
                    <div className="flex flex-col items-start justify-start ml-4">
                        <h2 className={`${h1Styles} text-xl`}>{announcement.title}</h2>
                        <p className='text-gray-700 text-sm'>{announcement.description}</p>
                    </div>
                </div>,
                {
                    autoClose: 5000,
                    hideProgressBar: true,
                    onClose: () => {
                        setTimeout(() => setTriggered(false), Math.random() * 10000 + 5000);
                    },
                }
            );
            setTriggered(true);
        }
    }, [announcements, isLoading, error, triggered]);

    return null;
};

export default TopAnnouncements;