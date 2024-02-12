import * as React from "react";
import type { SVGProps } from "react";

interface Coffee01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Coffee01Icon = (props: Coffee01IconProps) => {
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
        <path d="M5 7L6.7602 17.4048C7.06616 19.2134 7.21914 20.1177 7.76007 20.7417C9.21438 22.4194 14.7856 22.4194 16.2399 20.7417C16.7809 20.1177 16.9338 19.2134 17.2398 17.4048L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 7L5.74278 5.2876C6.35168 3.88385 6.65613 3.18197 7.29101 2.7856C8.88049 1.79324 14.9452 1.68444 16.709 2.7856C17.3439 3.18197 17.6483 3.88385 18.2572 5.2876L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="12" cy="14.5" rx="2" ry="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Coffee01Icon;
