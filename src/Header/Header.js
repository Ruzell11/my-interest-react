import React from 'react';

function Header(){
    return(
        <>
        <nav className='bg-dark d-flex justify-content-between align-items-center px-3'>
            <div className='brand'>
                <h1 className='fw-bolder fs-1 p-2'>Ruz.</h1>
            </div>
            <ul className='d-flex nav-links pt-2'>
                <li className='px-3'><a href='#' className='text-decoration-none'>Home</a></li>
                <li className='px-3'><a href='#' className='text-decoration-none'>About</a></li>
                <li className='px-3'><a href='#' className='text-decoration-none'>Interest</a></li>
            </ul>
        </nav>

        </>
    )
}

export default Header;