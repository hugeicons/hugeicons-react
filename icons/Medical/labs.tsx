import * as React from "react";
import type { SVGProps } from "react";

interface LabsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LabsIcon = (props: LabsIconProps) => {
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
        <path d="M17.5 21C15.567 21 14 19.433 14 17.5L14 3L21 3L21 17.5C21 19.433 19.433 21 17.5 21Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 3L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 7H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 16.875C10 19.9126 8 21 6 21C4 21 2 19.9126 2 16.875C2 13.8374 6 10 6 10C6 10 10 13.8374 10 16.875Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 12C15.083 11.1336 16.2974 9.87843 17.771 10.7626C19.0014 11.5009 20.0342 10.7244 21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LabsIcon;
