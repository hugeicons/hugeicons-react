import * as React from "react";
import type { SVGProps } from "react";

interface QuoteUpIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const QuoteUpIcon = (props: QuoteUpIconProps) => {
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
        <path d="M14 16C14 14.1144 14 13.1716 14.5858 12.5858C15.1716 12 16.1144 12 18 12C19.8856 12 20.8284 12 21.4142 12.5858C22 13.1716 22 14.1144 22 16C22 17.8856 22 18.8284 21.4142 19.4142C20.8284 20 19.8856 20 18 20C16.1144 20 15.1716 20 14.5858 19.4142C14 18.8284 14 17.8856 14 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 16V11.8626C14 8.19569 16.5157 5.08584 20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12C7.88562 12 8.82843 12 9.41421 12.5858C10 13.1716 10 14.1144 10 16C10 17.8856 10 18.8284 9.41421 19.4142C8.82843 20 7.88562 20 6 20C4.11438 20 3.17157 20 2.58579 19.4142C2 18.8284 2 17.8856 2 16Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 16V11.8626C2 8.19569 4.51571 5.08584 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default QuoteUpIcon;
