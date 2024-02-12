import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowCircle01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowCircle01Icon = (props: WorkflowCircle01IconProps) => {
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
        <path d="M9 9C9 10.6569 7.65685 12 6 12C4.34315 12 3 10.6569 3 9C3 7.34315 4.34315 6 6 6C7.65685 6 9 7.34315 9 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9H14C15.8856 9 16.8284 9 17.4142 9.58579C18 10.1716 18 11.1144 18 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12V22M6 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkflowCircle01Icon;
