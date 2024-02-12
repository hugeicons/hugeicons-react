import * as React from "react";
import type { SVGProps } from "react";

interface Cylinder01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cylinder01Icon = (props: Cylinder01IconProps) => {
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
        <path d="M20 5.5C20 7.433 16.4183 9 12 9C7.58172 9 4 7.433 4 5.5C4 3.567 7.58172 2 12 2C16.4183 2 20 3.567 20 5.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 18.5C20 20.433 16.4183 22 12 22C7.58172 22 4 20.433 4 18.5C4 16.567 7.58172 15 12 15C16.4183 15 20 16.567 20 18.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 18.5V5.5M4 18.5V5.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Cylinder01Icon;
