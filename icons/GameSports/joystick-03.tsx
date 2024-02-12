import * as React from "react";
import type { SVGProps } from "react";

interface Joystick03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Joystick03Icon = (props: Joystick03IconProps) => {
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
        <path d="M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 13L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8787 22H5.12132C5.00867 22 4.95235 22 4.90475 21.9977C3.87506 21.9486 3.05136 21.1249 3.00227 20.0952C3 20.0477 3 19.9913 3 19.8787C3 19.8293 3 19.8046 3.00057 19.7808C3.01242 19.2834 3.2092 18.8084 3.5525 18.4483C3.56894 18.4311 3.58641 18.4136 3.62132 18.3787L4.24264 17.7574C5.10973 16.8903 5.54328 16.4567 6.09459 16.2284C6.6459 16 7.25903 16 8.48528 16H15.5147C16.741 16 17.3541 16 17.9054 16.2284C18.4567 16.4567 18.8903 16.8903 19.7574 17.7574L20.3787 18.3787C20.4136 18.4136 20.4311 18.4311 20.4475 18.4483C20.7908 18.8084 20.9876 19.2834 20.9994 19.7808C21 19.8046 21 19.8293 21 19.8787C21 19.9913 21 20.0477 20.9977 20.0952C20.9486 21.1249 20.1249 21.9486 19.0952 21.9977C19.0477 22 18.9913 22 18.8787 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Joystick03Icon;
