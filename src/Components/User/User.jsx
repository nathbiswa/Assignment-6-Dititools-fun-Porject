import React from 'react';

const User = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 mt-10 '>
            <div className="w-8/12 mx-auto flex justify-between">
                <div className='space-y-2'>
                    <h1 className='text-[20px] md:text-5xl font-bold'>50K+</h1>
                    <span className='font-semibold'>Active Users</span>
                </div>
                <div className='border-r-2'></div>
                <div className='space-y-2'>
                    <h1 className='text-[20px] md:text-5xl font-bold'>200+</h1>
                    <span className='font-semibold'>Premium Tools</span>
                </div>
                <div className='border-r-2'></div>
                <div className='space-y-2'>
                    <h1 className='text-[20px] md:text-5xl font-bold'>4.9</h1>
                    <span className='font-semibold'>Rating</span>
                </div>
            </div>
        </div>
    );
};

export default User;