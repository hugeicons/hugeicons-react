import * as React from "react";
import type { SVGProps } from "react";

interface Bathtub02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bathtub02Icon = (props: Bathtub02IconProps) => {
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
        <path d="M22 12H15C14.3509 12 13.7193 11.7895 13.2 11.4L10.8 9.6C10.2807 9.21053 9.64911 9 9 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9V11C3 14.7712 3 16.6569 4.17157 17.8284C5.34315 19 7.22876 19 11 19H14C16.8089 19 18.2134 19 19.2223 18.3259C19.659 18.034 20.034 17.659 20.3259 17.2223C21 16.2134 21 14.8089 21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 19V21M6 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 9V4.5C5 3.67157 5.67157 3 6.5 3C7.32843 3 8 3.67157 8 4.5V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bathtub02Icon;
