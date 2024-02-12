import * as React from "react";
import type { SVGProps } from "react";

interface GitPullRequestDraftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GitPullRequestDraftIcon = (props: GitPullRequestDraftIconProps) => {
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
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 11H18.009M18 6H18.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GitPullRequestDraftIcon;
