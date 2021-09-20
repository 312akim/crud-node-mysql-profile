import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

function UserSchedule() {
    // Shows schedule and services for selected child
    const [scheduleData, setScheduleData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) =>{
            setScheduleData(response.data);
        })
    },[scheduleData])

    return (
        <div>
            <h2>
                Current Schedule for CHILDNAME
            </h2>
            {
                scheduleData.map((service) => <ChildService service={service} key={service.id}/>)
            }
        </div>
    );
}

const ChildService = ({service}) => {
    return (
        <StyledServiceWrapper>
            {serviceLine('Date:', service.pickupDate)}
            {serviceLine('Time:', service.pickupTime)}
            {serviceLine('Pickup:', service.requestPickup)}
            {serviceLine('Drop Off:', service.requestDropOff)}
            {serviceLine('Comments:', service.comments)}
        </StyledServiceWrapper>
    )
}

const serviceLine = (title, data) => {
    return (
        <StyledServiceContainer>
            <StyledServiceLabel>
                {title}
            </StyledServiceLabel>
            <StyledServiceText>
                {data}
            </StyledServiceText>
        </StyledServiceContainer>
    )
}

const StyledServiceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    padding: 5px;
    border: 2px dotted green;
    color: purple;
`

const StyledServiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: left;
`

const StyledServiceLabel = styled.div`
    width: 25%;
`

const StyledServiceText = styled.div`
    width: 75%;
`

export default UserSchedule;