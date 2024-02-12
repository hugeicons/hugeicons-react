import * as React from "react";
import type { SVGProps } from "react";

interface WorkflowSquare04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkflowSquare04Icon = (props: WorkflowSquare04IconProps) => {
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
        <path d="M15 18C15 16.5858 15 15.8787 15.4393 15.4393C15.8787 15 16.5858 15 18 15C19.4142 15 20.1213 15 20.5607 15.4393C21 15.8787 21 16.5858 21 18C21 19.4142 21 20.1213 20.5607 20.5607C20.1213 21 19.4142 21 18 21C16.5858 21 15.8787 21 15.4393 20.5607C15 20.1213 15 19.4142 15 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C7.41421 6 8.12132 6 8.56066 6.43934C9 6.87868 9 7.58579 9 9C9 10.4142 9 11.1213 8.56066 11.5607C8.12132 12 7.41421 12 6 12C4.58579 12 3.87868 12 3.43934 11.5607C3 11.1213 3 10.4142 3 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9H12C14.8284 9 16.2426 9 17.1213 9.87868C18 10.7574 18 12.1716 18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12V22M6 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkflowSquare04Icon;
