import * as React from "react";
import type { SVGProps } from "react";

interface SkewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SkewIcon = (props: SkewIconProps) => {
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
        <circle cx="9" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9171 4.5752L17.0848 6.4255M19.1544 8.99455L19.8476 18.0061M18.0162 19.7523L5.98574 18.2484M8.32812 5.88435L4.67383 16.1164" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SkewIcon;
