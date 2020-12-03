import React from 'react'
import styled from 'styled-components'


const BookmarkWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`
function Bookmarks() {

    return (
        <BookmarkWrapper>
            <h3 >Bookmarks</h3>
        </BookmarkWrapper>
    )
}

export default Bookmarks
