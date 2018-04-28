import React from 'react';
import styled from 'styled-components';


const boxGenBuilder=(props)=>
{
    const boxes = props.boxes.map(self=> (<Box key={self.id}
        row={self.row}
        column={self.column}
        onClick={()=> props.delete(self)}
    />))

    return(<Wrapper >
        {boxes}
    </Wrapper>)
}

const row=(props)=> `grid-row: ${props.row}`;
const column=(props)=> `grid-column: ${props.column}`;

const Box = styled.div`
    width: 40px;
    height: 40px;
    background: #3d3d3d;
    ${row};
    ${column};

    :hover {
        cursor: pointer;
        background: white;
    }
`

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    grid-template-columns: repeat(20, 1fr);
    color: ${props => props.color ||  'goldenrod'}
`


export default boxGenBuilder;
