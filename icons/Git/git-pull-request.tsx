import * as React from "react";
import type { SVGProps } from "react";

interface GitPullRequestIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GitPullRequestIcon = (props: GitPullRequestIconProps) => {
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
        <path d="M6 8L6 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 16V12C18 9.17157 18 7.75736 17.1213 6.87868C16.2426 6 14.8284 6 12 6L11 6M11 6C11 5.29977 12.9943 3.99153 13.5 3.5M11 6C11 6.70023 12.9943 8.00847 13.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default GitPullRequestIcon;
