import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Line = styled.p`
  border-top : 1px solid #000;
`;

const Data = ({ data }) =>
  <Line>
    <li>{data.name}: {data.value}</li>
  </Line>
  ;

export default Data;
