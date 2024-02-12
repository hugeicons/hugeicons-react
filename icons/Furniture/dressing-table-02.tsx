import * as React from "react";
import type { SVGProps } from "react";

interface DressingTable02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DressingTable02Icon = (props: DressingTable02IconProps) => {
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
        <path d="M19 16C19.5 16.3333 20.3 17.4 19.5 19C18.7 20.6 19.5 21.6667 20 22M19 16H5M19 16V13M5 16C4.5 16.3333 3.7 17.4 4.5 19C5.3 20.6 4.5 21.6667 4 22M5 16V13M20 13H19M4 13H5M19 13H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7.5C7 10.5376 9.23857 13 12 13C14.7614 13 17 10.5376 17 7.5C17 4.46243 14.7614 2 12 2C9.23858 2 7 4.46243 7 7.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 7L12.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.5 9.5L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DressingTable02Icon;
