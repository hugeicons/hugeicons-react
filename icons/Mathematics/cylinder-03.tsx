import * as React from "react";
import type { SVGProps } from "react";

interface Cylinder03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cylinder03Icon = (props: Cylinder03IconProps) => {
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
        <path d="M22 19C22 20.6569 17.5228 22 12 22C6.47715 22 2 20.6569 2 19C2 17.3431 6.47715 16 12 16C17.5228 16 22 17.3431 22 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 5C22 6.65685 17.5228 8 12 8C6.47715 8 2 6.65685 2 5C2 3.34315 6.47715 2 12 2C17.5228 2 22 3.34315 22 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 5V19M2 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Cylinder03Icon;
