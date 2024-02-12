import * as React from "react";
import type { SVGProps } from "react";

interface StartUp01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StartUp01Icon = (props: StartUp01IconProps) => {
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
        <path d="M7.29469 17C3.53045 7.25 8.86313 2.9375 12 2C15.1369 2.9375 20.4696 7.25 16.7053 17C16.1369 16.6875 14.4 16.0625 12 16.0625C9.6 16.0625 7.86313 16.6875 7.29469 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.5 15.5576C18.9421 15.6908 20.7078 16.0822 21.9814 17C21.9814 17 22.5044 12.0642 18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 15.5576C5.05794 15.6908 3.29216 16.0822 2.01858 17C2.01858 17 1.49555 12.0642 6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 19C9.5 19 9.91667 21.5 12 22C14.0833 21.5 14.5 19 14.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StartUp01Icon;
