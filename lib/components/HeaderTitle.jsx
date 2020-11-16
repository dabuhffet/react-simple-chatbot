import styled from 'styled-components';
import defaultTheme from '../theme';

const HeaderTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.headerFontSize};
`;

HeaderTitle.defaultProps = {
  theme: defaultTheme
};

export default HeaderTitle;
