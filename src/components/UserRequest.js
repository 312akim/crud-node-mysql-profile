import React from 'react';
import styled from 'styled-components'

function UserRequest(props) {
    return (
        <div style={styles.wrapper}>
            <h2>Request Form</h2>

            <form onSubmit={console.log('submitted')}>

                <StyledInputContainer>
                    <label htmlFor="requestDate">Request Date</label>
                    <input type="text" name="requestDate" id="requestDate" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestTime">Request Time</label>
                    <input type="text" name="requestTime" id="requestTime" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestPickup">Request Pickup</label>
                    <input type="text" name="requestPickup" id="requestPickup" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestDropOff">Request DropOff</label>
                    <input type="text" name="requestDropOff" id="requestDropOff" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestComments">Additional Comments</label>
                    <input type="text" name="requestComments" id="requestComments" />
                </StyledInputContainer>
                <button type='submit'>Send Request</button>
            </form>
        </div>
    );
}

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    }
}

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export default UserRequest;