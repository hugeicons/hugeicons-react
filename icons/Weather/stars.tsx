import * as React from "react";
import type { SVGProps } from "react";

interface StarsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StarsIcon = (props: StarsIconProps) => {
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
        <path d="M3 12C7.5 12 12 7.5 12 3C12 7.5 16.5 12 21 12C16.5 12 12 16.5 12 21C12 16.5 7.5 12 3 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 19.5C2.83333 19.5 4.5 17.8333 4.5 17C4.5 17.8333 6.16667 19.5 7 19.5C6.16667 19.5 4.5 21.1667 4.5 22C4.5 21.1667 2.83333 19.5 2 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 5C17 5 19 3 19 2C19 3 21 5 22 5C21 5 19 7 19 8C19 7 17 5 16 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StarsIcon;
