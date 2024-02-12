import * as React from "react";
import type { SVGProps } from "react";

interface MoveToIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoveToIcon = (props: MoveToIconProps) => {
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
        <path d="M9 5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 5H5.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11.0037H5.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17.0073H5.00898" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.0037H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 17.0073H19M19 17.0073C19.0035 16.7466 18.8202 16.4895 18.5964 16.2997L16.9939 15.0258M19 17.0073C18.9966 17.2587 18.8142 17.5134 18.5964 17.7148L16.9939 19.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoveToIcon;
