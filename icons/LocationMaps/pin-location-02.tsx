import * as React from "react";
import type { SVGProps } from "react";

interface PinLocation02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PinLocation02Icon = (props: PinLocation02IconProps) => {
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
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 19C17 20.1046 14.7614 21 12 21C9.23858 21 7 20.1046 7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PinLocation02Icon;
