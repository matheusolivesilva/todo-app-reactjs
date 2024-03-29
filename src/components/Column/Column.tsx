import styled from 'styled-components';
import {
  alignItems,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

type ColumnProps = LayoutProps &
  SpaceProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  FlexboxProps & {
    cursor?: string;
  };

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  ${({ cursor }): string | undefined => cursor && `cursor: ${cursor};`}
  ${flexbox}
  ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${border}
    ${alignItems}
`;
