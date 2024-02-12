import * as React from "react";
import type { SVGProps } from "react";

interface CursorLoading01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorLoading01Icon = (props: CursorLoading01IconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M11.0853 3.50494C7.46 2.82682 3.77445 2.75522 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.6007 2H15.3993C14.6704 2 14.0309 2.49235 14.0017 3.20178C13.965 4.09439 14.5928 4.68711 15.2521 5.24355L15.2521 5.24355C16.1643 6.01331 16.6203 6.39819 16.6682 6.88541C16.6757 6.96164 16.6757 7.03836 16.6682 7.11459C16.6203 7.60181 16.1643 7.98669 15.2521 8.75645C14.5746 9.32822 13.9631 9.85975 14.0017 10.7982C14.0309 11.5076 14.6704 12 15.3993 12L20.6007 12C21.3296 12 21.969 11.5076 21.9983 10.7982C22.0215 10.2334 21.8122 9.671 21.3676 9.27999C21.1649 9.10172 20.9544 8.93077 20.7479 8.75645C19.8357 7.98669 19.3797 7.60181 19.3318 7.11459C19.3243 7.03836 19.3243 6.96164 19.3318 6.88541C19.3797 6.39819 19.8357 6.01331 20.7479 5.24355C21.4183 4.67779 22.0364 4.12905 21.9983 3.20178C21.969 2.49235 21.3296 2 20.6007 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CursorLoading01Icon;
