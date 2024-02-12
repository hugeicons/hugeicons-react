import * as React from "react";
import type { SVGProps } from "react";

interface SnailIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SnailIcon = (props: SnailIconProps) => {
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
        <path d="M9.57687 14C9.57687 16.5 11.5 20 15.5399 20C19.5798 20 21.9999 16.866 21.9999 13C21.9999 8.02944 17.7699 4 12.0615 4C6.41519 4 1.41338 8.25529 2.0558 15.3865C2.08969 15.7628 2.34812 16.0843 2.71438 16.1769C5.41315 16.8591 8.18768 15.8637 9.57687 14ZM9.57687 14C9.57687 8.87223 17.5276 7.79116 17.5276 13C17.5276 14.4689 16.4999 15.7264 15.043 16.2456" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SnailIcon;
