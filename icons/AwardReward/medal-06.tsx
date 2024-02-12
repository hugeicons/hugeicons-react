import * as React from "react";
import type { SVGProps } from "react";

interface Medal06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Medal06Icon = (props: Medal06IconProps) => {
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
        <path d="M4.5 14.5C4.5 10.3579 7.85787 7 12 7C16.1421 7 19.5 10.3579 19.5 14.5C19.5 18.6421 16.1421 22 12 22C7.85787 22 4.5 18.6421 4.5 14.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14.5C9 12.8431 10.2952 11.5 11.8929 11.5H12.1071C13.7048 11.5 15 12.8431 15 14.5C15 16.1569 13.7048 17.5 12.1071 17.5H11.8929C10.2952 17.5 9 16.1569 9 14.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.5596 2L10.999 7M17.9995 2L15.1776 7.60217" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4399 2L12 4.59405M6 2L8.82144 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Medal06Icon;
