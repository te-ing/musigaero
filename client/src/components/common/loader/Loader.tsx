import styled from '@emotion/styled';
import { LoadingSpinner } from './LoadingSpinner';
import Portal from '../other/Portal';

type Props = {
  size?: number;
  color?: string;
};

export default function Loader({ size = 80, color = '#222' }: Props) {
  return (
    <Portal>
      <S.Wrapper>
        <LoadingSpinner size={size} color={color} />
      </S.Wrapper>
    </Portal>
  );
}

const S = {
  Wrapper: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
