import * as React from "react";
import type { SVGProps } from "react";

interface ProgrammingFlagIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ProgrammingFlagIcon = (props: ProgrammingFlagIconProps) => {
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
        <path d="M4 7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9C21 11.8284 21 13.2426 20.1213 14.1213C19.2426 15 17.8284 15 15 15H4V7Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 21L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 7L17.2265 8.05719C17.7422 8.50163 18 8.72386 18 9C18 9.27614 17.7422 9.49836 17.2265 9.94281L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7L7.77346 8.05719C7.25782 8.50163 7 8.72386 7 9C7 9.27614 7.25782 9.49836 7.77346 9.94281L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 7L11.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ProgrammingFlagIcon;
