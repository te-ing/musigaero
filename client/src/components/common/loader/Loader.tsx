import { LoadingSpinner } from './LoadingSpinner';
import Portal from '../other/Portal';
import { tailwindConfig } from '@/constants/styles';

type Props = {
  size?: number;
  color?: string;
};

export default function Loader({ size = 80, color = tailwindConfig.colors.primary }: Props) {
  return (
    <Portal>
      <div style={S.Wrapper}>
        <LoadingSpinner size={size} color={color} />
      </div>
    </Portal>
  );
}

const S = {
  Wrapper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
} as const;
