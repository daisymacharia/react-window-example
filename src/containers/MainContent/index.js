import React from 'react';
import { FiMap as MapView, FiList as ListView } from 'react-icons/fi';
import { FaFilter as FilterIcon } from 'react-icons/fa'
import { Button, Filter, Search, VirtualizedTable } from '../../components';

import './styles.scss';

export default function MainContent({ users }) {
    return (
        <nav className="page-wrapper">
            <div className="page-info">
                <div className="record-count">
                    {users.length} Accounts
                </div>
                <div className="views">
                    <div className='view-button'> <MapView /> <div>Map View</div></div>
                    <div className='view-button active' active={true}> <ListView /> <div>list View</div></div>
                </div>
                <Button label="Add Account" />
            </div>
            <div className='table-section'>
                <div className='filters'>
                    <div>
                        <Filter label='Owner' value='All Members' />
                        <Filter label='Groups' value='All Groups' />
                        <Filter label='Radius' value='4 miles' />
                        <FilterIcon className="filter-icon" />
                        <div>More Filters</div>
                    </div>
                    <div>
                        <Search />
                        <Button textColor='#3063e4' color='#758dd53d' label="Export to CSV" />
                    </div>


                </div>
                <div className='table'>
                    {users.length > 0 && <VirtualizedTable users={users} />}

                </div>
            </div>
        </nav>

    )
}