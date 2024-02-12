import * as React from "react";
import type { SVGProps } from "react";

interface GitMergeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GitMergeIcon = (props: GitMergeIconProps) => {
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
        <path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.02165 8.27881V15.4068M14.4117 12.0043L10.0198 12.0043C8.92206 12.0043 6.86231 11.1249 7.01867 8.77952" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GitMergeIcon;
