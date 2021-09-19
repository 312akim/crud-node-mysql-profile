import React from 'react';
import UserRequest from './UserRequest';
import UserSchedule from './UserService';

function UserHome(props) {
    return (
        <div>
            <UserSchedule />
            <UserRequest />
        </div>
    );
}

export default UserHome;