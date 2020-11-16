import styled from 'styled-components';
import { scale } from '../../common/animations';

const Option = styled.li`
  animation: ${scale} 0.3s ease forwards;
  display: block;
  margin: 2px;
  transform: scale(0);
  align: center;
  margin: auto;
`;

export default Option;
