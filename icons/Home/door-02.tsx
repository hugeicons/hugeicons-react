import * as React from "react";
import type { SVGProps } from "react";

interface Door02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Door02Icon = (props: Door02IconProps) => {
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
        <path d="M5 21.9999V5.99988C5 4.11426 5 3.17145 5.58579 2.58566C6.17157 1.99988 7.11438 1.99988 9 1.99988H15C16.8856 1.99988 17.8284 1.99988 18.4142 2.58566C19 3.17145 19 4.11426 19 5.99988V21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 21.9999H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12.9999L16 10.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Door02Icon;
