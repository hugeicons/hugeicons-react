import * as React from "react";
import type { SVGProps } from "react";

interface ComputerDesk02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerDesk02Icon = (props: ComputerDesk02IconProps) => {
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
        <path d="M22 12H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 12V8C17 7.17267 17.1727 7 18 7H19C19.8273 7 20 7.17267 20 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 17H16C14.1144 17 13.1716 17 12.5858 16.4142C12 15.8284 12 14.8856 12 13V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12V22M20 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6V5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2H10C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V6C13 7.41421 13 8.12132 12.5607 8.56066C12.1213 9 11.4142 9 10 9H6C4.58579 9 3.87868 9 3.43934 8.56066C3 8.12132 3 7.41421 3 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 9L10 12M6.5 9L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ComputerDesk02Icon;
