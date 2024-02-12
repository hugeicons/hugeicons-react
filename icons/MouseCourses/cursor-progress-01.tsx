import * as React from "react";
import type { SVGProps } from "react";

interface CursorProgress01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorProgress01Icon = (props: CursorProgress01IconProps) => {
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
        <path d="M15.9637 2.04725C16.4347 1.98425 16.9126 1.98425 17.3836 2.04725M19.9008 3.08814C20.2758 3.37442 20.6254 3.72398 20.9117 4.09896M21.9529 6.61766C22.0157 7.08784 22.0157 7.56479 21.9529 8.03497M13.5964 3.31808C11.445 5.35612 11.5253 8.53789 13.4929 10.5051C15.4826 12.4943 18.7194 12.5591 20.75 10.3326" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CursorProgress01Icon;
