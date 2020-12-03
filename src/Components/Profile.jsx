import React from 'react'

import styled from 'styled-components'
const ProfileWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`



function Profile() {
    return (
        <ProfileWrapper>
             <h3>Profile</h3>
        </ProfileWrapper>
    )
}

export default Profile
