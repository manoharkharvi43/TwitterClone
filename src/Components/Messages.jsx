import React from 'react'
import styled from 'styled-components'


const MessageWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`


function Messages() {
    return (
        <MessageWrapper>
            <h3>Messages</h3>
        </MessageWrapper>
    )
}

export default Messages
