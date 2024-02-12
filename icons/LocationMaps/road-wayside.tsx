import * as React from "react";
import type { SVGProps } from "react";

interface RoadWaysideIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RoadWaysideIcon = (props: RoadWaysideIconProps) => {
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
        <path d="M15.5 2.5C15.5 5.32843 15.5 6.74264 16.3787 7.62132C17.2574 8.5 18.6716 8.5 21.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 21.5C15.5 18.6716 15.5 17.2574 16.3787 16.3787C17.2574 15.5 18.6716 15.5 21.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 2.5C8.5 5.32843 8.5 6.74264 7.62132 7.62132C6.74264 8.5 5.32843 8.5 2.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 21.5C8.5 18.6716 8.5 17.2574 7.62132 16.3787C6.74264 15.5 5.32843 15.5 2.5 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2.5V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 12L19.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 12L2.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RoadWaysideIcon;
