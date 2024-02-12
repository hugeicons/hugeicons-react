import * as React from "react";
import type { SVGProps } from "react";

interface ApproximatelyEqualCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ApproximatelyEqualCircleIcon = (props: ApproximatelyEqualCircleIconProps) => {
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
        <path d="M7 9.28466C8.66667 7.2854 10.3333 7.87052 12 9.33333C13.6667 10.7961 15.3333 11.3813 17 9.382M7 14.618C8.66667 12.6187 10.3333 13.2039 12 14.6667C13.6667 16.1295 15.3333 16.7146 17 14.7153" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ApproximatelyEqualCircleIcon;
