import * as React from "react";
import type { SVGProps } from "react";

interface TinderIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TinderIcon = (props: TinderIconProps) => {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M19.2558 8.51453C22.3836 14.4194 19.433 21.5754 12.4376 22C3.44145 22 0.307049 11.3643 7.38031 6.45487C7.38031 14.5 14.1304 7.5 12 2C15 3 17.7939 5.56221 19.2558 8.51453Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TinderIcon;
