import React from 'react'
import styled from 'styled-components'
const ExploreWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`
function Explore() {
    return (
        <ExploreWrapper>
            <h3>Explore</h3>

        </ExploreWrapper>
    )
}

export default Explore
