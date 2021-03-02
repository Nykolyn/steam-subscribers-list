import styled from 'styled-components';
import { Button } from 'antd';
import { space, layout, color, flexbox, border, typography, background, grid, shadow, position } from 'styled-system';

export const Box = styled.div`
  ${space}
  ${color}
  ${grid}
  ${layout}
  ${flexbox}
  ${border}
  ${typography}
  ${shadow}
  ${position}
  ${background}
`;

export const Text = styled.span`
  ${space}
  ${color}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  color: 'text',
};

export const TextBlock = styled.p`
  ${space}
  ${color}
  ${typography}
  ${position}
  ${border}
  ${layout}
`;

TextBlock.defaultProps = {
  color: 'text',
};

export const Link = styled.a`
  ${space}
  ${color}
  ${typography}
  ${layout}
`;

export const Image = styled.img`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${position}
  ${border}
  ${shadow}
`;

export const StyledButton = styled(Button)`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${border}
`;
