import * as React from "react";
import type { SVGProps } from "react";

interface SuspiciousIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SuspiciousIcon = (props: SuspiciousIconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.9998C9.83563 16.372 10.8744 16 12 16C13.1256 16 14.1644 16.372 15 16.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8.01067C7 8.01067 8.40944 7.88341 9.19588 8.50798M9.19588 8.50798L8.93275 9.34267C8.82896 9.67191 9.10031 10 9.4764 10C9.87165 10 10.1327 9.64338 9.92918 9.33476C9.74877 9.06118 9.50309 8.75196 9.19588 8.50798ZM14 8.01067C14 8.01067 15.4094 7.88341 16.1959 8.50798M16.1959 8.50798L15.9328 9.34267C15.829 9.67191 16.1003 10 16.4764 10C16.8717 10 17.1327 9.64338 16.9292 9.33476C16.7488 9.06118 16.5031 8.75196 16.1959 8.50798Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SuspiciousIcon;
