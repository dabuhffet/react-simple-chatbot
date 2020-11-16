import styled from 'styled-components';
import { scale } from '../../common/animations';

const Option = styled.li`
  animation: ${scale} 0.3s ease forwards;
  display: flex;
  margin: 2px;
  transform: scale(0);
  align-items: center;
`;

export default Option;
