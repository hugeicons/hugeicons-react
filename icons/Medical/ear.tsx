import * as React from "react";
import type { SVGProps } from "react";

interface EarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EarIcon = (props: EarIconProps) => {
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
        <path d="M6.07692 18C6.07692 20.2091 7.226 22 9.30769 22C11.3894 22 13.0769 20.5 13.6154 18C13.8736 16.8013 14.4026 16.0767 15.2308 15.5C17.3846 14 19 11.6923 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15C10.385 15 11.5078 13.9926 11.5078 12.75C11.5078 11.5074 10.385 10.5 9 10.5C9 8.48311 9.46383 6 12.0094 6C13.7998 6 14.8496 7.37416 15 9.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EarIcon;
