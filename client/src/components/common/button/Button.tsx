import { tailwindConfig } from '@/constants/styles';
import { ComponentProps } from 'react';
import styled from 'styled-components';
import { CSSObject } from 'styled-components/dist/types';

type Props = ComponentProps<'button'> & {
  text: string;
  styles?: CSSObject;
};

export default function Button({ text, styles, ...props }: Props) {
  return (
    <ButtonComponent styles={styles} {...props}>
      {text}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button<{ styles?: CSSObject }>`
  width: fit-content;
  padding: 2px 4px;
  border: 1px solid ${tailwindConfig.colors.primary};
  color: ${tailwindConfig.colors.primary};
  min-width: 70px;
  min-height: 26px;
  font-size: 12px;
  border-radius: 4px;
  ${({ styles }) => styles}
`;
