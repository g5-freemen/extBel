import React from 'react';

export default function Item({children}) {
    return (
        <div className='item'>
            {children}
        </div>
    )
}