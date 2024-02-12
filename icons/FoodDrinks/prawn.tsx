import * as React from "react";
import type { SVGProps } from "react";

interface PrawnIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PrawnIcon = (props: PrawnIconProps) => {
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
        <path d="M10.5 5C5.80558 5 2 8.80558 2 13.5C2 18.1944 5.80558 22 10.5 22C15.1944 22 19 18.1944 19 13.5C19 13.0306 18.6156 12.6411 18.1554 12.7339C16.2128 13.1256 14.75 14.842 14.75 16.9M10.5 5H17.3C18.2389 5 19.0218 5.77293 18.7902 6.6828C18.0413 9.62441 15.3747 11.8 12.2 11.8H10.5C9.09167 11.8 7.95 12.9417 7.95 14.35C7.95 15.7583 9.09167 16.9 10.5 16.9H14.75M10.5 5V8.4M14.75 16.9V17.75M5.4 20.3L8.8 16.9M3.275 9.25L7.95 13.075" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 8L13.491 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 2.00012H20.1608C21.321 2.00012 22.1912 3.0512 21.9637 4.17777C21.6689 5.63739 20.3433 6.67844 18.9189 7.00012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PrawnIcon;
