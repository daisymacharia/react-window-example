import React from 'react';
import './styles.scss';
import { VirtualizedTable } from '../../components';

export default function MainContent({ users }) {
    return (
        <nav className="page-wrapper">
            <div className="page-info">
                <div className="record-count">
                    {users.length} Accounts
                </div>
                <div className="view">
                    <div>Map View</div>
                    <div>list View</div>
                </div>
                <div className="button">
                    <button>Add Account</button>
                </div>

            </div>
            <div className='table-section'>
                <div className='filters'> filters will be here!!</div>
                <div className='table'>{users.length > 0 && <VirtualizedTable users={users} />}</div>

            </div>
        </nav>

    )
}