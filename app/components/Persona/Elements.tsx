import React from 'react'
import styled from 'styled-components'

const StyledElements = styled.div`
    display: grid;
    flex-grow: 1;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: 1fr;
    max-width: 1500px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

export default function Elements() {
  return (
    <>
        <StyledElements>
            <h1>Elements</h1>
        </StyledElements>
    </>
  )
}
