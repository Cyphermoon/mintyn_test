import React from 'react'

const NotificationBell = () => {
    return (
        <>
            <small className={`absolute  -top-3 -right-2 flex justify-center items-center rounded-full w-5 h-5 text-title_sm text-white bg-primary`}>3</small>
            <img src='/icons/bell-53.svg' alt='Bell icon' />
        </>
    )
}

export default NotificationBell