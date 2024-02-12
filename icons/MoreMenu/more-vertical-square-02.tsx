import * as React from "react";
import type { SVGProps } from "react";

interface MoreVerticalSquare02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoreVerticalSquare02Icon = (props: MoreVerticalSquare02IconProps) => {
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
        <path d="M11.992 12H12.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9842 16H11.9932" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9998 8H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.48438 12C2.48438 7.52166 2.48438 5.28249 3.87562 3.89124C5.26686 2.5 7.50603 2.5 11.9844 2.5C16.4627 2.5 18.7019 2.5 20.0931 3.89124C21.4844 5.28249 21.4844 7.52166 21.4844 12C21.4844 16.4783 21.4844 18.7175 20.0931 20.1088C18.7019 21.5 16.4627 21.5 11.9844 21.5C7.50603 21.5 5.26686 21.5 3.87562 20.1088C2.48438 18.7175 2.48438 16.4783 2.48438 12Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoreVerticalSquare02Icon;
