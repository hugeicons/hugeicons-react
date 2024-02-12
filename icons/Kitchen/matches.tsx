import * as React from "react";
import type { SVGProps } from "react";

interface MatchesIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MatchesIcon = (props: MatchesIconProps) => {
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
        <path d="M15 8H9C7.11438 8 6.17157 8 5.58579 8.58579C5 9.17157 5 10.1144 5 12V18C5 19.8856 5 20.8284 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C19 20.8284 19 19.8856 19 18V12C19 10.1144 19 9.17157 18.4142 8.58579C17.8284 8 16.8856 8 15 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8V6C18 4.11438 18 3.17157 17.4142 2.58579C16.8284 2 15.8856 2 14 2H10C8.11438 2 7.17157 2 6.58579 2.58579C6 3.17157 6 4.11438 6 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1543 19C13.7259 19 15 17.7464 15 16.2C15 13.9048 12.5608 13.4 12.5608 11C10.7317 12 11 15 11 15C11 15 9.31084 15 9.31026 13.5C8.36162 16 9.66704 19 12.1543 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MatchesIcon;
