import * as React from "react";
import type { SVGProps } from "react";

interface Coordinate02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Coordinate02Icon = (props: Coordinate02IconProps) => {
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
        <path d="M13.5 2L12 3.5M12 3.5V5M12 3.5L10.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 14H5L2 17H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 14L22 17M22 14L19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8V16M12 16L3 22M12 16L21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Coordinate02Icon;
