import React from 'react'
import styled from 'styled-components'
const ListWrapper =  styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
h3{
	color: #e8eaed;
}
`

function List() {
    return (
        <ListWrapper>
            <h3>List</h3>
        </ListWrapper>
    )
}

export default List
