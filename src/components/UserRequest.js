import React from 'react';
import styled from 'styled-components'

function UserRequest(props) {
    return (
        <div style={styles.wrapper}>
            <h2>Request Form</h2>

            <form onSubmit={console.log('submitted')}>
                <StyledInputContainer>
                    <label htmlFor="requestType">Request Type</label>
                    <input type="text" name="requestType" id="requestType" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestDay">Request Day</label>
                    <input type="text" name="requestDay" id="requestDay" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestFrequency">Request Frequency</label>
                    <input type="text" name="requestFrequency" id="requestFrequency" />
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