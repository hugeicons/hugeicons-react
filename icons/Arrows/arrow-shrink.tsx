import * as React from "react";
import type { SVGProps } from "react";

interface ArrowShrinkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowShrinkIcon = (props: ArrowShrinkIconProps) => {
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
        <path d="M14.2299 17.9947C14.2194 17.2447 13.7042 14.7612 14.2307 14.2347C14.7573 13.7083 17.24 14.2247 17.9897 14.2355M20.9997 20.9981L14.6149 14.6146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.7698 17.9947C9.7803 17.2447 10.2955 14.7612 9.769 14.2347C9.24247 13.7083 6.75975 14.2247 6.01005 14.2355M3 20.9981L9.38478 14.6146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.00765 9.76133C6.75739 9.7709 9.24092 10.2832 9.76664 9.75585C10.2922 9.22853 9.77284 6.74581 9.76116 5.99592M9.37715 9.36743L3.00195 3.00244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9918 9.76133C17.2421 9.7709 14.7585 10.2832 14.2328 9.75585C13.7072 9.22853 14.2266 6.74581 14.2383 5.99592M14.6223 9.36743L20.9975 3.00244" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowShrinkIcon;
