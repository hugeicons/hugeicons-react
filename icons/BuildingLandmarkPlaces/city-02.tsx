import * as React from "react";
import type { SVGProps } from "react";

interface City02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const City02Icon = (props: City02IconProps) => {
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
        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4H10C8.34533 4 8 4.34533 8 6V22H16V6C16 4.34533 15.6547 4 14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 13H5C3.34533 13 3 13.3453 3 15V22H8V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 13H16V22H21V15C21 13.3453 20.6547 13 19 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 4L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22L12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 15H13M11 11.5H13M11 8L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default City02Icon;
