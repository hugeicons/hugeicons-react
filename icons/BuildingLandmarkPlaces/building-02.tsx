import * as React from "react";
import type { SVGProps } from "react";

interface Building02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Building02Icon = (props: Building02IconProps) => {
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
        <path d="M15 2H9C5.69067 2 5 2.69067 5 6V22H19V6C19 2.69067 18.3093 2 15 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 22V19C15 17.3453 14.6547 17 13 17H11C9.34533 17 9 17.3453 9 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.5 6H10.5M13.5 9.5H10.5M13.5 13H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Building02Icon;
