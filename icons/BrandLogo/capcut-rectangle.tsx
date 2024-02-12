import * as React from "react";
import type { SVGProps } from "react";

interface CapcutRectangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CapcutRectangleIcon = (props: CapcutRectangleIconProps) => {
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
        <path d="M10.8 12L5.99997 14.5C5.99997 15.6785 5.99997 15.7678 6.35152 16.1339C6.70307 16.5 7.26887 16.5 8.40049 16.5H13.2015C14.3332 16.5 14.899 16.5 15.2505 16.1339C15.6021 15.7678 15.6021 15.6785 15.6021 14.5M10.8 12L18 8.25M10.8 12L5.99997 9.5C5.99997 8.32149 5.99997 8.23223 6.35152 7.86612C6.70307 7.5 7.26887 7.5 8.40049 7.5H13.2015C14.3332 7.5 14.899 7.5 15.2505 7.86612C15.6021 8.23223 15.6021 8.32149 15.6021 9.5M10.8 12L18 15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.49777 12C2.49777 7.52166 2.49777 5.28249 3.88901 3.89124C5.28026 2.5 7.51943 2.5 11.9978 2.5C16.4761 2.5 18.7153 2.5 20.1065 3.89124C21.4978 5.28249 21.4978 7.52166 21.4978 12C21.4978 16.4783 21.4978 18.7175 20.1065 20.1088C18.7153 21.5 16.4761 21.5 11.9978 21.5C7.51943 21.5 5.28026 21.5 3.88901 20.1088C2.49777 18.7175 2.49777 16.4783 2.49777 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CapcutRectangleIcon;
