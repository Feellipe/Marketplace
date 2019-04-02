import React from 'react';
import styled from 'styled-components'
import ImgMediaCard from '../RC/Cards'

const Market = () => (
    <Wrapper>
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
        <CardWrapper>
            <ImgMediaCard/>  
        </CardWrapper>  
    </Wrapper>
)

const Wrapper = styled.div`
    grid-column: 4/13;
    grid-row: 2/3;
    height: 100%;
`;

const CardWrapper = styled.div`
    display: inline-flex;
`;

export default Market;