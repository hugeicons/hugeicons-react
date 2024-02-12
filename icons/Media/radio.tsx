import * as React from "react";
import type { SVGProps } from "react";

interface RadioIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RadioIcon = (props: RadioIconProps) => {
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
        <circle cx="14.5" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 13.5C2 9.74142 2 7.86213 3.0528 6.60746C3.22119 6.40678 3.40678 6.22119 3.60746 6.0528C4.86213 5 6.74142 5 10.5 5H13.5C17.2586 5 19.1379 5 20.3925 6.0528C20.5932 6.22119 20.7788 6.40678 20.9472 6.60746C22 7.86213 22 9.74142 22 13.5C22 17.2586 22 19.1379 20.9472 20.3925C20.7788 20.5932 20.5932 20.7788 20.3925 20.9472C19.1379 22 17.2586 22 13.5 22H10.5C6.74142 22 4.86213 22 3.60746 20.9472C3.40678 20.7788 3.22119 20.5932 3.0528 20.3925C2 19.1379 2 17.2586 2 13.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 12H7M6 15H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RadioIcon;
