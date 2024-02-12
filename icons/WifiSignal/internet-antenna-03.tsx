import * as React from "react";
import type { SVGProps } from "react";

interface InternetAntenna03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InternetAntenna03Icon = (props: InternetAntenna03IconProps) => {
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
        <path d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12V22M9 22H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default InternetAntenna03Icon;
