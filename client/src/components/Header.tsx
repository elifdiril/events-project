import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-end bg-[#365486] w-full h-14'>
            <button className='text-white p-2 m-2 bg-[#0F1035] rounded-xl text-center flex flex-items justify-center font-medium'>
                <Link href='/events/create-event'> + Add Event</Link></button>
        </div>
    );
};

export default Header;