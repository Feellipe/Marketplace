import React from 'react';
import styled from 'styled-components'
import ListMenu from '../RC/List'

const SideMenu = () => (
    <Wrapper>
        <ListMenu></ListMenu>
    </Wrapper>
)

const Wrapper = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    background-color: #c6c4c4;
    height: 1000px;
    width: 100%;
`;

export default SideMenu;