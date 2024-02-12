import * as React from "react";
import type { SVGProps } from "react";

interface GitBranchIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GitBranchIcon = (props: GitBranchIconProps) => {
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
        <path d="M7 19H13C15.8284 19 17.2426 19 18.1213 18.1213C19 17.2426 19 15.8284 19 13V10M19 10C19.7002 10 21.0085 11.9943 21.5 12.5M19 10C18.2998 10 16.9915 11.9943 16.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default GitBranchIcon;
