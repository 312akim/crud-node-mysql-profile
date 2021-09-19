import React from 'react';
import styled from 'styled-components';

function UserSchedule(props) {
    // Shows schedule and services for selected child
    const testScheduleData = [
        {
            pickupDay: 'Monday',
            pickupTime: 3,
            pickupLocation: '123 Apple Dr, Seattle',
            dropOffLocation: '456 Home Dr, Bellevue',
        },
        {
            pickupDay: 'Monday',
            pickupTime: 15,
            pickupLocation: '456 Home Dr, Bellevue',
            dropOffLocation: '123 Apple Dr, Seattle',
        }
    ]
    return (
        <div>
            <h2>
                Current Schedule for CHILDNAME
            </h2>
            {
                testScheduleData.map((service) => <ChildService service={service} />)
            }
        </div>
    );
}

const ChildService = ({service}) => {
    return (
        <StyledServiceWrapper>
            {serviceLine('Day:', service.pickupDay)}
            {serviceLine('Time:', service.pickupTime)}
            {serviceLine('Pickup:', service.pickupLocation)}
            {serviceLine('Drop Off:', service.dropOffLocation)}
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