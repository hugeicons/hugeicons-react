import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowCircle06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowCircle06Icon = (props: WorkflowCircle06IconProps) => {
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
        <path d="M9 5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 14C21 15.6569 19.6569 17 18 17C16.3431 17 15 15.6569 15 14C15 12.3431 16.3431 11 18 11C19.6569 11 21 12.3431 21 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 14H12C8.68629 14 6 11.3137 6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkflowCircle06Icon;
