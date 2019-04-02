import React from "react";
import styled from "styled-components";
import ListMenu from "../RC/List";

const LateralMenu = () => (
  <Wrapper2>
    <ListMenu />
  </Wrapper2>
);

const Wrapper2 = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  background-color: whitesmoke !important;
  height: 1000px;
  width: 100%;
`;

export default LateralMenu;
