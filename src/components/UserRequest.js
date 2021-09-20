import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { useForm } from 'react-hook-form';

function UserRequest(props) {
    const { register, handleSubmit } = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
        // API Url
        Axios.post('http://localhost:3001/api/insert', data).then(
            () => {
                console.log('successful insert of: ' + data.stringify());
            }
        )
    }

    return (
        <div style={styles.wrapper}>
            <h2>Request Form</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>

                <StyledInputContainer>
                    <label htmlFor="pickupDate">Pickup Date</label>
                    <input {...register("pickupDate")} type="text" name="pickupDate" id="pickupDate" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="pickupTime">Pickup Time</label>
                    <input {...register("pickupTime")} type="text" name="pickupTime" id="pickupTime" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestPickup">Pickup Address</label>
                    <input {...register("requestPickup")} type="text" name="requestPickup" id="requestPickup" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="requestDropOff">Drop Off Address</label>
                    <input {...register("requestDropOff")} type="text" name="requestDropOff" id="requestDropOff" />
                </StyledInputContainer>

                <StyledInputContainer>
                    <label htmlFor="comments">Additional Comments</label>
                    <input {...register("comments")} type="text" name="comments" id="comments" />
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