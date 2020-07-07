import React from 'react'
import './styles.scss';

const Filter = ({ label, value }) => {
    return (
        <div className='filter'>
            <div className='label' >{label}</div>
            <div className='value'>{value}</div>
        </div>
    )
}

export default Filter;