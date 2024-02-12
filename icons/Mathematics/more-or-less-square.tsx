import * as React from "react";
import type { SVGProps } from "react";

interface MoreOrLessSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoreOrLessSquareIcon = (props: MoreOrLessSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.99609 12H17.0041" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.0039 9.00009H8.99994C8.01346 9.00009 7.14269 9.01047 7.01994 8.67609C6.92417 8.41511 7.52394 7.59609 8.00394 6.99609" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.00973 14.9999L15.0137 14.9999C16.0002 14.9999 16.871 14.9895 16.9937 15.3239C17.0895 15.5849 16.4897 16.4039 16.0097 17.0039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoreOrLessSquareIcon;
