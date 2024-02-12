import * as React from "react";
import type { SVGProps } from "react";

interface MonasIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MonasIcon = (props: MonasIconProps) => {
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
        <path d="M13 7C13.5 6.5 14 5.61496 14 5C14 3.61929 12 2 12 2C12 2 10 3.61929 10 5C10 5.61496 10.5 6.5 11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 7H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 7L9 17M13 7L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.42153 20.1014C6.75257 18.7451 5.65909 17.3295 5 17H19C18.3409 17.3295 17.2474 18.7451 16.5785 20.1014C16.0533 21.1661 15.7908 21.6984 15.5483 21.8492C15.3058 22 14.8705 22 14 22H10C9.12949 22 8.69423 22 8.45174 21.8492C8.20925 21.6984 7.94667 21.1661 7.42153 20.1014Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MonasIcon;
