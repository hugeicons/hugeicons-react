import * as React from "react";
import type { SVGProps } from "react";

interface UserAccountIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const UserAccountIcon = (props: UserAccountIconProps) => {
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
        <path d="M14 9H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 12.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2" y="3" width="20" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 16C6.20831 13.4189 10.7122 13.2491 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default UserAccountIcon;
