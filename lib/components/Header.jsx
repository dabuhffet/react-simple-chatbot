import styled from 'styled-components';
import defaultTheme from '../theme';

const Header = styled.div`
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.headerBgColor};
  color: ${({ theme }) => theme.headerFontColor};
  display: flex;
  fill: ${({ theme }) => theme.headerFontColor};
  height: 76px;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
`;

Header.defaultProps = {
  theme: defaultTheme
};

export default Header;
