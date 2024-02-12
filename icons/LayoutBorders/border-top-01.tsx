import * as React from "react";
import type { SVGProps } from "react";

interface BorderTop01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BorderTop01Icon = (props: BorderTop01IconProps) => {
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
        <path d="M21.5 6.5C21.3015 5.40606 20.9503 4.60096 20.3292 3.96447C18.9001 2.5 16.6001 2.5 12 2.5C7.39991 2.5 5.09987 2.5 3.6708 3.96447C3.04969 4.60096 2.69854 5.40606 2.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.2486 17.6896C21.0553 18.7317 20.7134 19.4986 20.1088 20.105C19.5041 20.7113 18.7392 21.0541 17.7 21.2479M21.495 10C21.5 10.586 21.5 11.2883 21.5 11.9741C21.5 12.6599 21.5 13.4249 21.495 14.0109M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3161 21.5 10.6844 21.5 10.0999 21.495M6.3 21.2479C5.26076 21.0541 4.49591 20.7113 3.89124 20.105C3.28657 19.4986 2.94471 18.7317 2.75142 17.6896M2.50495 10C2.5 10.586 2.5 11.2883 2.5 11.9741C2.5 12.6598 2.5 13.4249 2.50495 14.0109" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 12L20 12M4 12L2.5 12M12 9L12 15M12 19.5312L12 21M15 12L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BorderTop01Icon;
