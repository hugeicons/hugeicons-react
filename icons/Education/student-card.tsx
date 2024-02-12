import * as React from "react";
import type { SVGProps } from "react";

interface StudentCardIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StudentCardIcon = (props: StudentCardIconProps) => {
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
        <path d="M14 3.5C17.7712 3.5 19.6569 3.5 20.8284 4.7448C22 5.98959 22 7.99306 22 12C22 16.0069 22 18.0104 20.8284 19.2552C19.6569 20.5 17.7712 20.5 14 20.5L10 20.5C6.22876 20.5 4.34315 20.5 3.17157 19.2552C2 18.0104 2 16.0069 2 12C2 7.99306 2 5.98959 3.17157 4.7448C4.34315 3.5 6.22876 3.5 10 3.5L14 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 15.4999C6.60865 13.3625 10.3539 13.2458 12 15.4999M10.249 10.25C10.249 11.2165 9.46552 12 8.49902 12C7.53253 12 6.74902 11.2165 6.74902 10.25C6.74902 9.2835 7.53253 8.5 8.49902 8.5C9.46552 8.5 10.249 9.2835 10.249 10.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9.5L19 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 13.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default StudentCardIcon;
