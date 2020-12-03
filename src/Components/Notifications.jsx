import React from 'react'
import styled from 'styled-components'


const NotificationWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
h3{
	color: #e8eaed;
}
`
function Notifications() {
    return (
        <NotificationWrapper>
            <h3>Notifications</h3>
        </NotificationWrapper>
    )
}

export default Notifications
