type TProps = {
  size?: number;
  color?: string;
};

export function LoadingSpinner({ size = 100, color = '#3b3b3b' }: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: 'auto', background: 'rgba(241, 242, 243, 0)', display: 'block' }}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.875s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(45 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.625s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(135 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.375s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(225 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.125s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(315 50 50)">
        <rect x="47" y="29" rx="3" ry="6" width="6" height="12" fill={color}>
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}
