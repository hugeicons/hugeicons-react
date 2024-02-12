import * as React from "react";
import type { SVGProps } from "react";

interface DatabaseAddIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DatabaseAddIcon = (props: DatabaseAddIconProps) => {
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
        <path d="M11 15C6.58172 15 3 13.6569 3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.1679 22 11.3346 21.9981 11.5 21.9942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 16.6667V18M17 18V19.3333M17 18H18.3333M17 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DatabaseAddIcon;
