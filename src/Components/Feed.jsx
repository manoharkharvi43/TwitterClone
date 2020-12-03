import React from 'react'
import styled from 'styled-components'
const FeedWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`

function Feed() {
    return (
        <FeedWrapper>
            <h3>Feed</h3>
        </FeedWrapper>
    )
}

export default Feed
